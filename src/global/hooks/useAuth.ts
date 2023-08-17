import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../appState/store";
import { setAuthLoading, setAuthData } from "../appState/slice/authSlice";
import apiCall from "../utils/axois";
import { SIGNIN_USER, SIGNUP_USER } from "../constant/apiRoutes";
import { getErrorMessage } from "../utils/helper";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const useAuth = () => {
  const { loading } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const toast = useToast();
  const router = useRouter();

  // REGISTER USER
  const signUpUser = async (data: any) => {
    dispatch(setAuthLoading(true));

    try {
      const res = await apiCall("POST", SIGNUP_USER, data);

      if (res.status === 201) {
        console.log("Response", res);
        dispatch(setAuthLoading(false));

        dispatch(setAuthData(res.data));

        toast({
          title: "success",
          status: res.data.message,
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        router.push("/dashboard/overview");
      }
    } catch (error: any) {
      console.log(error);

      toast({
        title: getErrorMessage(error),
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });

      dispatch(setAuthLoading(false));
    }
  };

  // LOGIN USER
  const signInUser = async (data: any) => {
    dispatch(setAuthLoading(true));

    try {
      const res = await apiCall("POST", SIGNIN_USER, data);

      if (res.status === 200) {
        console.log("Response", res);
        dispatch(setAuthLoading(false));

        dispatch(setAuthData(res.data));

        toast({
          title: res.data.message,
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        router.push("/dashboard/overview");
      }
    } catch (error: any) {
      toast({
        title: getErrorMessage(error),
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });

      dispatch(setAuthLoading(false));
    }
  };

  return {
    loading: loading,
    signUpUser,
    signInUser,
  };
};

export default useAuth;