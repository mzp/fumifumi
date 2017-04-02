type t = [
  | `Start of string
  | `Fetch of string * Js.Json.t
  | `Clear of string
  | `HideHeader
  | `ToggleHeader
] [@@deriving variants]
