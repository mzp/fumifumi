module File = struct
  type t
  external headers : unit -> Js.Json.t = "default" [@@bs.module "api/lib/rails-header"]
  external name : t -> string = "name" [@@bs.get]

  let post file =
    let data =
      FormData.create () in
    let () =
      FormData.append data "attachment" file in
    let config =
      Obj.magic [%bs.obj { headers = headers () }] in
    Axios.post "/api/web/magazines" (Obj.magic data) config

  let empty : t =
    Obj.magic Js.null
end

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

type 'a t = 'a constraint 'a = [>
  | `ImportQueue of File.t list
  | `ImportStart of File.t
  | `ImportSuccess of File.t
  | `ImportError of File.t * Js.Promise.error
]

let import_ (dispatch : 'a -> unit) files =
  let files =
    Array.to_list files in
  dispatch @@ `ImportQueue files;
  ignore @@ ListLabels.fold_left files ~init:(Js.Promise.resolve ()) ~f:begin fun before file ->
    before
    |> Js.Promise.then_ (fun () -> Js.Promise.resolve @@ dispatch @@ `ImportStart file)
    |> Js.Promise.then_ (fun () -> File.post file)
    |> Js.Promise.then_ (fun _ -> Js.Promise.resolve @@ dispatch @@ `ImportSuccess file)
    |> Js.Promise.catch (fun e -> Js.Promise.resolve @@ dispatch @@ `ImportError (file, e))
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
