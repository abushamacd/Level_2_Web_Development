import { RootState } from "../redux/store";
import { decrement, increment } from "../redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Home = () => {
  const { count } = useAppSelector((state: RootState) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="flex gap-2 justify-center items-center">
      <button
        onClick={() => dispatch(increment())}
        className="p-2 border border-green-400 rounded-md"
      >
        Increment
      </button>
      <div>{count}</div>
      <button
        onClick={() => dispatch(decrement())}
        className="p-2 border border-red-400 rounded-md"
      >
        Decrement
      </button>
    </div>
  );
};

export default Home;
