type kind = string
type url = string

module Action : sig
  type 'a t = 'a constraint 'a = [>
    | `Start of kind
    | `Fetch of kind * Js.Json.t
    | `Clear of kind
  ]
end

type t

val fetch : ('a Action.t -> unit) -> kind -> url -> unit
val make : kind -> ('a Action.t,  t) Ripple.Reducer.t
