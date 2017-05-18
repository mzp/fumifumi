module Action = struct
  type 'a t = 'a constraint 'a = [>
    | `Start of string
    | `Fetch of string * Js.Json.t
    | `Clear of string
  ]
end

type t = {
  kind : string;
  ready: bool;
  data : Js.Json.t
}

let jsonify { ready; data } =
  Obj.magic [%bs.obj {
    ready = Js.Boolean.to_js_boolean ready;
    data = data;
  }]

let empty kind = {
  kind;
  data=Js.Json.array [||];
  ready=false
}

let f ({ kind } as current) = function
  | `Start k when k = kind ->
    { current with ready = false }
  | `Clear k when k = kind ->
    { current with ready = false; data = Js.Json.array [||] }
  | `Fetch (k, data) when k = kind ->
    { current with ready = true; data }
  | _ ->
    current

let make kind =
  Ripple.Primitive.make jsonify (empty kind) f
