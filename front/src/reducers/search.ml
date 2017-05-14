type 'a t = 'a constraint 'a = [>
    `SearchResult of Js.Json.t
]

external encode_uri_component : string -> string = "encodeURIComponent" [@@bs.val]

let make_url query =
  Printf.sprintf "/api/web/episodes/search?query=%s" @@ encode_uri_component query

let search dispatch query =
  Axios.get (make_url query) Js.null
  |> Bs_promise.then_ (fun response -> dispatch @@ `SearchResult response##data)
  |> ignore

let clear dispatch =
  dispatch @@ `SearchResult (Js.Json.array [||])

let results () =
  Ripple.Primitive.json (Js.Json.array [||]) begin fun state -> function
    | `SearchResult xs -> xs
    | _ -> state
  end

let make () =
  let open Ripple.Object in
  make (
    "results" +> (results ()) @+
    nil
  )
