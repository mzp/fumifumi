let series () =
  let open Ripple.Object in
  make @@
    "list" +> (SeriesListReducer.make ()) @+
     nil

let episode () =
  let open Ripple.Object in
  make @@
    "author" +> (EpisodeAuthorReducer.make ()) @+
    "magazine" +> (EpisodeMagazineReducer.make ()) @+
    "show" +> (EpisodeShowReducer.make ()) @+
     nil

let magazine () =
  let open Ripple.Object in
  make @@
    "import_" +> (Magazine.make ()) @+
     nil

let make () =
  let open Ripple.Object in
  make @@
    "series" +> series () @+
    "episode" +> episode () @+
    "magazine" +> magazine () @+
    "layout" +> LayoutReducer.make () @+
    nil
