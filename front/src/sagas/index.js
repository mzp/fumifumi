import {fork} from "redux-saga/effects";
import uploadMagazine from "./upload-magazine";

export default function *() {
    yield fork(uploadMagazine);
}
