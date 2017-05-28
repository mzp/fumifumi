let info () =
  Ripple.Value.bool (fun current -> function
    | `HideHeader -> false
    | `ToggleHeader -> not current
    | _ -> current)
  |> Ripple.Lift.option false

let make () =
  let open Ripple.Object in
  builder (fun t ->
      t
      |> field "resource" (
        Reducer_resource.make ()
        |> Ripple.Lift.option (Reducer_resource.create "episode.show" (Js.Json.array [||])))
      |> field "info" (info ()))
