import { fetchSampleData } from "../../sagas/actions";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
const Counter = () => {

    const loading = useAppSelector(state => state.sampleData.loading)
    const dispatch = useAppDispatch()

    return (
        <div>
            <button onClick={() => dispatch({ type: fetchSampleData.FETCH_SAMPLE_DATA })}>
                {loading ? "loading..." : "fetch data"}
            </button>
            (check state in redux devtools)
            
        </div>
    )
}

export default Counter;