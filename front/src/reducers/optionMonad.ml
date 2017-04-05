let (>>=) x f =
  match x with
  | Some y -> f y
  | None -> None

let map f = function
  | Some x -> Some (f x)
  | None -> None

