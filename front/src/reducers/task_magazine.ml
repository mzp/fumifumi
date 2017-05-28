open Ripple.Task

let import context =
  take_if context ~f:(function
      | `Import_ files -> Some files
      | _ -> None)
  |>  Lwt_result.map Array.to_list
  >?= fun files ->
    put context @@ `ImportQueue files
  >>= fun () ->
    Lwt_list.iter_s (fun file ->
        put context (`ImportStart file)
        >>= fun () -> call (File.post file)
        >>= function
        | Result.Ok _ -> put context (`ImportSuccess file)
        | Result.Error e -> put context (`ImportError (file, e)))
      files

let tasks () = [
  loop (make import)
]
