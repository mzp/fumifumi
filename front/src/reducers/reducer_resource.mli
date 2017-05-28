module Action : sig
  type 'a t = 'a constraint 'a = [>
    | `Start of string
    | `Fetch of string * Js.Json.t
    | `Clear of string
  ]
end

type t

val make : string -> ('a Action.t,  t) Ripple.Reducer.t
