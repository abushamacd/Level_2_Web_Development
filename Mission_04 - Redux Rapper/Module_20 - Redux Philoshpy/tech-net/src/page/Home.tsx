import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Home = () => {
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 justify-center items-center">
      <button className="p-2 border border-green-400 rounded-md">
        Increment
      </button>
      <div>{count}</div>
      <button className="p-2 border border-red-400 rounded-md">
        Decrement
      </button>
    </div>
  );
};

export default Home;
