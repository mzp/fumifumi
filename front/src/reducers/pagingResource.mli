module Action : sig
  type 'a t = 'a constraint 'a = [>
    | `Start of Resource.kind
    | `Loading of Resource.kind
    | `FetchPages of Resource.kind * Resource.url option * Js.Json.t array
  ]
end

type t

val fetch : ('a Action.t -> unit) -> Resource.kind -> Resource.url -> unit
val fetchNext : ('a Action.t -> unit) -> Resource.kind -> Resource.url -> unit
val make : Resource.kind -> ('a Action.t,  t) Ripple.Reducer.t
val create : Resource.kind -> Resource.url option -> Js.Json.t array -> t
