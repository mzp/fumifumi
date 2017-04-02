module File : sig
  type t
end

module Entry : sig
  type t
end

type 'a t = 'a constraint 'a = [>
  | `ImportQueue of File.t list
  | `ImportStart of File.t
  | `ImportSuccess of File.t
  | `ImportError of File.t * Axios.error
]

val import_ : ('a t -> unit) -> File.t array -> unit
val make : unit -> ('a t, Entry.t list * unit) Ripple.Reducer.t
