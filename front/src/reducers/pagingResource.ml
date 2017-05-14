module Action = struct
  type 'a t = 'a constraint 'a = [>
    | `Start of Resource.kind
    | `Loading of Resource.kind
    | `FetchPages of Resource.kind * Resource.url option * Js.Json.t array
  ]
end

type t = {
  kind : Resource.kind;
  ready: bool;
  data : Js.Json.t array;
  next : Resource.url option;
  loading: bool
}

let next_url_of link =
  Js.Re.fromString ("<([^>]+)>; rel=\"next\"")
  |> Js.Re.exec link
  |> OptionMonad.map (fun result -> (Js.Re.matches result).(1))

let fetch_data dispatch kind url =
  Axios.get url Js.null
  |> Js.Promise.then_ (fun response ->
      let open OptionMonad in
      let next =
        (Js.Dict.get response##headers "link") >>= next_url_of in
      let data =
        Json.expect_array response##data in
      Js.Promise.resolve @@ dispatch @@ `FetchPages (kind, next, data))
  |> ignore

let fetch dispatch kind url =
  let () =
    dispatch (`Start kind)
  in
  fetch_data dispatch kind url

let fetchNext dispatch kind url =
  let () =
    dispatch (`Loading kind)
  in
  fetch_data dispatch kind url

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

let empty kind = create kind None [||]

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

let make kind =
  Ripple.Primitive.make jsonify (empty kind) f
