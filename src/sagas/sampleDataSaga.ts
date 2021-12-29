import * as Effects from "redux-saga/effects";
import { fetchSampleData } from "./actions";
import { setLoadingState, setData } from "../features/sampleData/sampleDataSlice";

const call: any = Effects.call;
const takeLatest: any = Effects.takeLatest;
const put: any = Effects.put

const callAPI = async (url: string) => {
    const response = await fetch(url)
    return response.json()
};

function* handleSampleData() {
    yield put(setLoadingState(true))
    try {
        const response: object = yield call(callAPI, "https://jsonplaceholder.typicode.com/posts/1")
        console.log(response)
        yield put(setData(response))
        yield put(setLoadingState(false))
    } catch(e) {
        yield put(setLoadingState(false))
        console.error("Error", e)
    }
    
}

export default function* watchForSampleData() {
    yield takeLatest(fetchSampleData.FETCH_SAMPLE_DATA, handleSampleData)
}