let make () =
  let open Ripple.Object in
  builder (fun t ->
      t
      |> field "resource" (
        Reducer_resource.make ()
        |> Ripple.Lift.option (Reducer_resource.create "magazine.show" (Js.Json.array [||]))))
