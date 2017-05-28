let results () =
  Ripple.Value.json begin fun state -> function
    | `SearchResult xs -> xs
    | `SearchClear -> Js.Json.array [||]
    | _ -> state
  end
  |> Ripple.Lift.option (Js.Json.array [||])

let make () =
  let open Ripple.Object in
  builder (fun t ->
      t
      |> field "results" (results ()))
