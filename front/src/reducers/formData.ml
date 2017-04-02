type t
external create : unit -> t = "FormData" [@@bs.new]
external append : t -> string -> 'a -> unit = "append" [@@bs.send]
