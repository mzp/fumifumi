let make () =
  let open Ripple.Object in
  make (
    "resource" +> (Resource.make "magazine.show") @+
    nil
  )
