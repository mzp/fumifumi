let expect_array json =
  match Js.Json.reifyType json with
  | Js.Json.Array, data ->
    data
  | _ ->
    failwith "unexpected response type"

