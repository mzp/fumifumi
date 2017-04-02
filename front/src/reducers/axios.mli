type response = <
  data: Js.Json.t;
  status: int;
  statustext: string;
  headers: Js.Json.t;
  config: Js.Json.t
> Js.t

type error = <
  config: Js.Json.t;
  code : string;
  response : response
> Js.t

type config = Js.Json.t

external request : config -> (response, error) Bs_promise.t = "get" [@@bs.module "axios"]
external get : string -> config Js.null -> (response, error) Bs_promise.t = "get" [@@bs.module "axios"]
external delete: string -> config Js.null -> (response, error) Bs_promise.t = "delete" [@@bs.module "axios"]
external head: string -> config Js.null -> (response, error) Bs_promise.t = "head" [@@bs.module "axios"]
external post: string -> 'a Js.null -> config Js.null -> (response, error) Bs_promise.t = "post" [@@bs.module "axios"]
external put: string -> config Js.null -> (response, error) Bs_promise.t = "put" [@@bs.module "axios"]
external patch: string -> config Js.null -> (response, error) Bs_promise.t = "patch" [@@bs.module "axios"]
