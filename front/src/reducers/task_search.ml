open Ripple.Task

external encode_uri_component : string -> string = "encodeURIComponent" [@@bs.val]

let make_url query =
  Printf.sprintf "/api/web/episodes/search?query=%s" @@ encode_uri_component query

let search context =
  let open Context.Infix in
  Context.take_if context ~f:(function
      | `Search query -> Some query
      | _ -> None)
  >?= fun query ->
    Context.call (Axios.get (make_url query) Js.null)
  >?= fun response ->
    Context.put context (`SearchResult response##data)

let tasks () = [
  Task.loop (Task.ignore search)
]
