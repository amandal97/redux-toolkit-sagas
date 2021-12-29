import { all, fork } from "redux-saga/effects";
import sampleDataSaga from "./sampleDataSaga";

export default function* rootSaga() {
    yield all([
        fork(sampleDataSaga)
    ])
}