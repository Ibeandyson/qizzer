import { useSelector, useDispatch } from "react-redux";
import apiCall from "../utils/axois";
import { RootState } from "../appState/store";
import { setCategoryData, setCategoryLoading } from "../appState/slice/categorySlice";
import { useToast } from "@chakra-ui/react";
import { GET_CATEGORY } from "../constant/apiRoutes";

const useCategory = () => {
	const toast = useToast();
	const dispatch = useDispatch();
	const { categoryData, categoryLoading } = useSelector((state: RootState) => state.category);

	const getCategory = async () => {
		dispatch(setCategoryLoading(true));
		try {
			const res = await apiCall("GET", GET_CATEGORY);
			if (res.status === 200) {
				dispatch(setCategoryLoading(false));
				dispatch(setCategoryData(res.data.trivia_categories))
				toast({
					title: "category gotten",
					status: "success",
					duration: 5000,
					isClosable: true,
					position: "top",
				});
			}
		} catch (error) {
			dispatch(setCategoryLoading(false));
			console.log(error);
			toast({
				title: "An error occured try again",
				status: "error",
				duration: 5000,
				isClosable: true,
				position: "top",
			});
		}
	}


	return {
		getCategory,
		categoryLoading: categoryLoading,
		categoryData: categoryData
	}
}

export default useCategory