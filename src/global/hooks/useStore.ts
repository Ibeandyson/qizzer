import { useSelector, useDispatch } from "react-redux";
import apiCall from "../utils/axois";
import { RootState } from "../appState/store";
import { setStoreLoading } from "../appState/slice/storeSlice";
import { getErrorMessage } from "../utils/helper";
import { useToast } from "@chakra-ui/react";
import { createStoreType } from "@/types/store";
import { CREATE_STORE } from "../constant/apiRoutes";

const useStore = () => {
	const toast = useToast();
	const dispatch = useDispatch();

	// create store
	const createStore = async (data: createStoreType) => {
		dispatch(setStoreLoading(true));
		if (data.storeName == '') {
			toast({
				title: 'Store name is empty',
				status: "error",
				duration: 5000,
				isClosable: true,
				position: "top",
			});
			dispatch(setStoreLoading(false));
		}
		try {
			const res = await apiCall("POST", CREATE_STORE, data);
			if (res.status === 201) {
				dispatch(setStoreLoading(false));
				toast({
					title: "Store creeated",
					status: "success",
					duration: 5000,
					isClosable: true,
					position: "top",
				});
			}
		} catch (error) {
			dispatch(setStoreLoading(false));
			console.log(error);
			toast({
				title: getErrorMessage(error),
				status: "error",
				duration: 5000,
				isClosable: true,
				position: "top",
			});
		}
	}

	
	return {
		createStore
	}
}

export default useStore 