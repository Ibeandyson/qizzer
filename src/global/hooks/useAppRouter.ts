import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../appState/store";
import { setUrlPathParams } from "../appState/slice/appRouterSlice"

const useAppRouter = () => {
    const paramsForNavigation: any = useSelector((state: RootState) => state.appRouter.params);
    const dispatch = useDispatch();
    const setParamsForNavigation = (params: string) => {
        dispatch(setUrlPathParams(params));
    };
    return {
        paramsForNavigation,
        setParamsForNavigation,
    };
};

export default useAppRouter;