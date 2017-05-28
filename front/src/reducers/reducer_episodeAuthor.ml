let make () =
  let open Ripple.Object in
  make (
    "resource" +> (Reducer_resource.make "episode.author") @+
    nil
  )
