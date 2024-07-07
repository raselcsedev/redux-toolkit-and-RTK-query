import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {
  increment,
  decrement,
  customIncrement,
} from "../redux/slices/counterSlice";

export default function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter.value);
  return (
    <div className="text-center flex mr-4">
      
      <h1 className="text-3xl font-bold pr-4">{counter}</h1>

      <div>
        <button
          className="bg-green-400 text-white p-2 rounded-lg"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="bg-red-400 text-white p-2 rounded-lg ml-2"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="bg-red-400 text-white p-2 rounded-lg ml-2"
          onClick={() => dispatch(customIncrement(2))}
        >
          Custom Increment
        </button>
      </div>
    </div>
  );
}