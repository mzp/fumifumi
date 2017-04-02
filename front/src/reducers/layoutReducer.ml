let header () =
  Ripple.Primitive.bool false (fun current -> function
    | `HideHeader -> false
    | `ToggleHeader -> not current
    | _ -> current)

let make () =
  let open Ripple.Object in
  make (
    "header" +> (header ()) @+
    nil
  )
