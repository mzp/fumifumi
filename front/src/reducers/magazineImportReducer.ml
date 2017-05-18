let files () =
  Ripple.Primitive.json (Js.Json.array [||]) (fun _ _ -> Js.Json.array [||])

let make () =
  let open Ripple.Object in
  make (
    "files" +> (files ()) @+
    nil
  )
