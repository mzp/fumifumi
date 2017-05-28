module Action = struct
  type 'a t = 'a constraint 'a = [>
    | `Start of string
    | `Loading of string
    | `FetchPages of string * Resource.url option * Js.Json.t array
  ]
end

type t = {
  kind : string;
  ready: bool;
  data : Js.Json.t array;
  next : string option;
  loading: bool
}

let jsonify { ready; data; loading; next } =
  Obj.magic [%bs.obj {
    ready = Js.Boolean.to_js_boolean ready;
    loading = Js.Boolean.to_js_boolean loading;
    next = Js.Null.from_opt next;
    data = Js.Json.array data
  }]

let create kind next data = {
  ready = true; loading = false;
  kind;
  next;
  data
}

let f ({ kind } as current) = function
  | `Start k when k = kind ->
    { current with ready = false; loading = true; data = [||] }
  | `Loading k when k = kind ->
    { current with loading = true }
  | `FetchPages (k, next, data) when k = kind ->
    { current with
        ready = true;
        loading = false;
        data = Array.append current.data data;
        next }
  | _ ->
    current

let make () =
  Ripple.Reducer.make f jsonify
