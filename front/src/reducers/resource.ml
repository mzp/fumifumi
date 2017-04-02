type kind = string
type url = string
type 'a t = 'a constraint 'a = [>
  | `Start of kind
  | `Fetch of kind * Js.Json.t
  | `Clear of kind
]

let fetch dispatch kind url =
  let () =
    dispatch (`Start kind)
  in
    Axios.get url Js.null
    |> Bs_promise.then_ (fun response -> dispatch @@ `Fetch (kind, response##data))
    |> ignore

let ready kind =
  Ripple.Primitive.bool false (fun current -> function
    | `Start k | `Clear k ->
        if kind = k then
          false
        else
          current
    | `Fetch (k, _) ->
        if kind = k then
          true
        else
          current
    | _ ->
        current)

let data kind =
  Ripple.Primitive.json (Js.Json.array_ [||]) (fun current -> function
    | `Fetch (k, data) ->
        if kind = k then
          data
        else
          current
    | `Clear k ->
        if kind = k then
          Js.Json.array_ [||]
        else
          current
    | _ -> current)

let make kind =
  Ripple.Object.(make @@
    "ready" +> ready kind @+
    "data" +> data kind @+
    nil)
