open Ripple.Task

let next_url_of link =
  Js.Re.fromString ("<([^>]+)>; rel=\"next\"")
  |> Js.Re.exec link
  |> OptionMonad.map (fun result -> (Js.Re.matches result).(1))

let fetch_data context kind url =
  call (Axios.get url Js.null)
  >?= fun response ->
    let next =
      OptionMonad.bind (Js.Dict.get response##headers "link")  next_url_of in
    let data =
      Json.expect_array response##data in
    put context (`FetchPages (kind, next, data))

let fetch context =
  take_if context ~f:(function
      | `PagingFetch (kind, url) -> Some (kind, url)
      | _ -> None)
  >?= function (kind, url) ->
    put context (`Start kind)
  >>= fun () ->
    fetch_data context kind url

let fetch_next context =
  take_if context ~f:(function
      | `PagingNext (kind, url) -> Some (kind, url)
      | _ -> None)
  >?= function (kind, url) ->
    put context (`Loading kind)
  >>= fun () ->
    fetch_data context kind url

let tasks () =  [
  loop (make fetch);
  loop (make fetch_next)
]
