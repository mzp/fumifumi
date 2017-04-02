let files () =
  Ripple.Primitive.json (Js.Json.array_ [||]) (fun _ _ -> Js.Json.array_ [||])

let make () =
  let open Ripple.Object in
  make (
    "files" +> (files ()) @+
    nil
  )
