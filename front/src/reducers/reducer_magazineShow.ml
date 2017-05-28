let make () =
  let open Ripple.Object in
  make (
    "resource" +> (Reducer_resource.make "magazine.show") @+
    nil
  )
