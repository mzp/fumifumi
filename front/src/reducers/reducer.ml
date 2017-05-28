let series () =
  let open Ripple.Object in
  make @@
    "list" +> (Reducer_seriesList.make ()) @+
     nil

let episode () =
  let open Ripple.Object in
  make @@
    "author" +> (Reducer_episodeAuthor.make ()) @+
    "show" +> (Reducer_episodeShow.make ()) @+
     nil

let magazine () =
  let open Ripple.Object in
  make @@
    "import_" +> (Reducer_magazine.make ()) @+
    "show" +> (Reducer_magazineShow.make ()) @+
     nil

let make () =
  let open Ripple.Object in
  make @@
    "series" +> series () @+
    "episode" +> episode () @+
    "magazine" +> magazine () @+
    "search" +> Reducer_search.make () @+
    "layout" +> Reducer_layout.make () @+
    nil
