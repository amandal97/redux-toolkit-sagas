import { decrement, increment } from "./counterSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const Counter = () => {

    const count = useAppSelector(state => state.counter.value)
    const dispatch = useAppDispatch()

    return (
        <div>
            <button onClick={() => dispatch(increment())}>
                Increment
            </button>
            <span>{count}</span>
            <button onClick={() => dispatch(decrement())}>
                Decrement
            </button>
        </div>
    )
}

export default Counter;