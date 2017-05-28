module Action : sig
  type 'a t = 'a constraint 'a = [>
    | `Start of string
    | `Loading of string
    | `FetchPages of string * string option * Js.Json.t array
  ]
end

type t

val make : unit -> ('a Action.t,  t) Ripple.Reducer.t
val create : string -> string option -> Js.Json.t array -> t
