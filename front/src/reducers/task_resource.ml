open Ripple.Task

let task context =
  let open Context.Infix in
  Context.take_if context ~f:(function `ResourceFetch (kind, url) -> Some (kind, url) | _ -> None)
  >?= fun (kind, url) ->
    Context.put context (`Start kind)
  >>= fun () ->
    Context.call @@ Axios.get url Js.null
  >?= fun response ->
    Context.put context @@ `Fetch (kind, response##data)

let tasks () = [
  Task.loop (Task.ignore task)
]
