(* expor all actions *)
include Action

(* export store *)
let tasks () = List.concat [
    Task_search.tasks ();
    Task_magazine.tasks ();
    Task_resource.tasks ();
    Task_pagingResource.tasks ()
  ]

let m =
  let (reducer, value) =
    Reducer.make () in
  Ripple.Export.export ~tasks:(tasks ()) reducer value

include (val m : Ripple.Export.M)
