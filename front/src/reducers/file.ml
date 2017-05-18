type t
external headers : unit -> Js.Json.t = "default" [@@bs.module "api/lib/rails-header"]
external name : t -> string = "name" [@@bs.get]

let post file =
  let data =
    FormData.create () in
  let () =
    FormData.append data "attachment" file in
  let config =
    Obj.magic [%bs.obj { headers = headers () }] in
  Axios.post "/api/web/magazines" (Obj.magic data) config

let empty : t =
  Obj.magic Js.null
