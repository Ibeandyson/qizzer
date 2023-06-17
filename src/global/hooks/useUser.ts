import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../appState/store";
import { setToke } from "../appState/slice/userSlice";

const useUser = () => {
  const state = useSelector((state: RootState) => state.user.token);
  const dispatch = useDispatch();
  const setToken = () => {
    dispatch(setToke("1000"));
  };

  return {
    token: state,
    setToken,
  };
};

export default useUser;
