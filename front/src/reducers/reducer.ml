open Ripple.Object

let series () =
  builder (fun t ->
      t
      |> obj_field "list" (Reducer_seriesList.make ()))

let episode () =
  builder (fun t ->
      t
      |> obj_field "author" (Reducer_episodeAuthor.make ())
      |> obj_field "show" (Reducer_episodeShow.make ()))

let magazine () =
  builder (fun t ->
      t
      |> obj_field "import_" (Reducer_magazine.make ())
      |> obj_field "show" (Reducer_magazineShow.make ()))

let make () =
  builder (fun t ->
      t
      |> obj_field "series" (series ())
      |> obj_field "episode" (episode ())
      |> obj_field "magazine" (magazine ())
      |> obj_field "search" (Reducer_search.make ())
      |> obj_field "layout" (Reducer_layout.make ()))
