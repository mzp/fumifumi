type series = <
  id : int;
  magazines : Js.Json.t array;
  magazines_url : string Js.null
> Js.t

external coerce : Js.Json.t -> series = "%identity"

let magazines (series : series) =
  let id =
    string_of_int series##id in
  let kind =
    Printf.sprintf "series.list.magazines.%s" id in
  let next =
    Js.Null.to_opt series##magazines_url in
  let data =
    series##magazines in
  (id, Reducer_pagingResource.create kind next data)

let seriesMagazines () =
  Ripple.Lift.object_ (Reducer_pagingResource.make ())
  |> Ripple.Reducer.map (fun current -> function
      | `Fetch ("series.list", data) ->
        data
        |> Json.expect_array
        |> Array.to_list
        |> List.map (fun x -> magazines @@ coerce x)
      | _ -> current)
  |> Ripple.Lift.option []

let make () =
  let open Ripple.Object in
  builder (fun t ->
      t
      |> field "series" (
        Reducer_resource.make ()
        |> Ripple.Lift.option (Reducer_resource.create "series.list" (Js.Json.array [||])))
      |> field "magazines" (seriesMagazines ()))
