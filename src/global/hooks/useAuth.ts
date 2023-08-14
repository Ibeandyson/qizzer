import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../appState/store";
import { setAuthLoading } from "../appState/slice/authSlice";
import apiCall from "../utils/axois";
import { SIGNIN_USER, SIGNUP_USER } from "../constant/apiRoutes";

const useAuth = () => {
  const { loading } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const signInUser = async () => {
    const res = apiCall("POST", SIGNIN_USER);
    dispatch(setAuthLoading(true));
  };

  const signUpUser = async (data: any) => {
    dispatch(setAuthLoading(true));

    try {
      const res = await apiCall("POST", SIGNUP_USER, data);

      if (res.status === 201) {
        console.log("Response", res);
        dispatch(setAuthLoading(false));
      }
    } catch (error) {
      dispatch(setAuthLoading(false));
    }
  };

  return {
    loading: loading,
    signUpUser,
  };
};

export default useAuth;
