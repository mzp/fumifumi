let bind x f =
  match x with
  | Some y -> f y
  | None -> None

let (>>=) = bind


let map f = function
  | Some x -> Some (f x)
  | None -> None

