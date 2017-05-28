module Entry = struct
  type t = {
    id : int;
    file: File.t;
    error : Js.Promise.error option;
    name : string;
    status : [`Prepare | `Start | `Success | `Error ]
  }

  let of_status = function
    | `Prepare -> "prepare"
    | `Start -> "start"
    | `Success -> "success"
    | `Error -> "error"

  let jsonify { id; file; error; name; status } =
    Obj.magic [%bs.obj {
      id = id;
      file = file;
      error = Js.Null.from_opt error;
      name = name;
      status = of_status status
    }]

  let make id file = {
    file;
    id;
    name=File.name file;
    status=`Prepare;
    error=None
  }

  let empty = {
    file=File.empty;
    id= ~-1;
    name="";
    status=`Prepare;
    error=None
  }
end

let redux ({Entry.file} as entry) = function
  (* Because f, file are file objects of JS, we cannot use caml_equal. *)
  | `ImportStart f when f == file ->
    { entry with status=`Start }
  | `ImportSuccess f when f == file ->
    { entry with status=`Success }
  | `ImportError (f, error) when f == file ->
    { entry with status=`Error; error=Some error }
  | _ ->
    entry

let file () =
  Ripple.Reducer.make redux Entry.jsonify

let files () =
  Ripple.Lift.array (file ())
  |> Ripple.Reducer.map (fun xs -> function
      | `ImportQueue ys -> List.mapi Entry.make ys
      | _ -> xs)
  |> Ripple.Lift.option []

let make () =
  let open Ripple.Object in
  builder (fun t ->
      t
      |> field "files" (files ()))
