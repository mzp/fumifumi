let info () =
  Ripple.Primitive.bool false (fun current -> function
    | `HideHeader -> false
    | `ToggleHeader -> not current
    | _ -> current)

let make () =
  let open Ripple.Object in
  make (
    "resource" +> (Reducer_resource.make "episode.show") @+
    "info" +> (info ()) @+
    nil
  )
