open Ripple.Task

let task context =
  take_if context ~f:(function `ResourceFetch (kind, url) -> Some (kind, url) | _ -> None)
  >?= fun (kind, url) ->
    put context (`Start kind)
  >>= fun () ->
    call @@ Axios.get url Js.null
  >?= fun response ->
    put context @@ `Fetch (kind, response##data)

let tasks () = [
  loop (make task)
]
