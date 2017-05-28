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

let file () =
  Ripple.Primitive.make Entry.jsonify (Entry.empty) (fun ({Entry.file} as entry) -> function
    (* Because f, file are file objects of JS, we cannot use caml_equal. *)
    | `ImportStart f when f == file ->
        { entry with status=`Start }
    | `ImportSuccess f when f == file ->
        { entry with status=`Success }
    | `ImportError (f, error) when f == file ->
        { entry with status=`Error; error=Some error }
    | _ ->
        entry
  )

let files () =
  Ripple.Array.lift (file ()) [] (fun xs -> function
    | `ImportQueue ys ->
        List.mapi Entry.make ys
    | _ -> xs)

let make () =
  let open Ripple.Object in
  make (

    "files" +> (files ()) @+
    nil
  )
