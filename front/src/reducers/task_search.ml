open Ripple.Task

external encode_uri_component : string -> string = "encodeURIComponent" [@@bs.val]

let make_url query =
  Printf.sprintf "/api/web/episodes/search?query=%s" @@ encode_uri_component query

let search context =
  take_if context ~f:(function
      | `Search query -> Some query
      | _ -> None)
  >?= fun query ->
    call (Axios.get (make_url query) Js.null)
  >?= fun response ->
    put context (`SearchResult response##data)

let tasks () = [
  loop (make search)
]
