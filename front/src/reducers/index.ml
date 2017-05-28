(* expor all actions *)
include Action

(* export store *)
let tasks () = List.concat [
    Task_search.tasks ();
    Task_magazine.tasks ();
    Task_resource.tasks ();
    Task_pagingResource.tasks ()
]

include (val Ripple.Redux.to_redux ~tasks:(tasks ()) (Reducer.make ()) : Ripple.Redux.Export)
