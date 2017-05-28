open Ripple.Task

let import context =
  let open Context.Infix in
  Context.take_if context ~f:(function
      | `Import_ files -> Some files
      | _ -> None)
  |>  Lwt_result.map Array.to_list
  >?= fun files ->
    Context.put context @@ `ImportQueue files
  >>= fun () ->
    Lwt_list.iter_s (fun file ->
        Context.put context (`ImportStart file)
        >>= fun () -> Context.call (File.post file)
        >>= function
        | Result.Ok _ -> Context.put context (`ImportSuccess file)
        | Result.Error e -> Context.put context (`ImportError (file, e)))
      files

let tasks () = [
  Task.loop (Task.ignore import)
]
