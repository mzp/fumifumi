let results () =
  Ripple.Primitive.json (Js.Json.array [||]) begin fun state -> function
    | `SearchResult xs -> xs
    | `SearchClear -> Js.Json.array [||]
    | _ -> state
  end

let make () =
  let open Ripple.Object in
  make (
    "results" +> (results ()) @+
    nil
  )
