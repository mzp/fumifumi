let header () =
  Ripple.Value.bool (fun current -> function
    | `HideHeader -> false
    | `ToggleHeader -> not current
    | _ -> current)
  |> Ripple.Lift.option false

let make () =
  let open Ripple.Object in
  builder (fun t ->
      t
      |> field "header" (header ()))
