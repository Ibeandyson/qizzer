import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../appState/store";
import { setAuthLoading, setAuthMessage } from "../appState/slice/authSlice";
import apiCall from "../utils/axois";
import { SIGNIN_USER, SIGNUP_USER } from "../constant/apiRoutes";
import { getErrorMessage } from "../utils/helper";

const useAuth = () => {
  const { loading, message } = useSelector((state: RootState) => state.auth);
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
        dispatch(
          setAuthMessage({ title: res.data.message, status: "success" })
        );
      }
    } catch (error: any) {
      dispatch(
        setAuthMessage({ title: getErrorMessage(error), status: "error" })
      );
      dispatch(setAuthLoading(false));
    }
  };

  return {
    loading: loading,
    message: message,
    signUpUser,
  };
};

export default useAuth;
