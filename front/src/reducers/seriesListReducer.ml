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
  (id, PagingResource.create kind next data)

let seriesMagazines () =
  Ripple.Object.lift (PagingResource.make "") [] @@ fun current -> function
  | `Fetch ("series.list", data) ->
    data
    |> Json.expect_array
    |> Array.to_list
    |> List.map (fun x -> magazines @@ coerce x)
  | _ -> current

let make () =
  let open Ripple.Object in
  make (
    "series" +> (Resource.make "series.list") @+
    "magazines" +> (seriesMagazines ()) @+
    nil
  )
