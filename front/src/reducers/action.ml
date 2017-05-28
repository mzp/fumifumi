type t = [
  | `HideHeader
  | `ToggleHeader
  (* search *)
  | `Search of string
  | `SearchClear
  | `SearchResult of Js.Json.t
  (* import *)
  | `Import_ of File.t list
  | `ImportQueue of File.t list
  | `ImportStart of File.t
  | `ImportSuccess of File.t
  | `ImportError of File.t * Js.Promise.error
  (* resource *)
  | `ResourceFetch of string * string
  | `Start of string
  | `Fetch of string * Js.Json.t
  | `Clear of string
  (* paging resource *)
  | `PagingFetch of string * string
  | `PagingNext of string * string
] [@@deriving variants]
