type kind = string
type url = string
type 'a t = 'a constraint 'a = [>
  | `Start of kind
  | `Fetch of kind * Js.Json.t
  | `Clear of kind
]

val fetch : ('a t -> unit) -> kind -> url -> unit
val make : kind -> ('a t, bool * (Js.Json.t * unit)) Ripple.Reducer.t
