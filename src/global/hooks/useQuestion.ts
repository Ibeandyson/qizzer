import { useSelector, useDispatch } from "react-redux";
import apiCall from "../utils/axois";
import { RootState } from "../appState/store";
import { setQuestionData, setQuestionLoading } from "../appState/slice/questionSlice";
import { useToast } from "@chakra-ui/react";
import { GET_QUESTION } from "../constant/apiRoutes";

const useQuestion = () => {
	const toast = useToast();
	const dispatch = useDispatch();
	const { questionData, questionLoading }: any = useSelector((state: RootState) => state.questions);


	const getQuestion = async (amount: number, category: number, level: string) => {
		dispatch(setQuestionLoading(true));
		try {
			const res = await apiCall("GET", `${GET_QUESTION}?amount=${amount}&category=${category}&difficulty=${level}`);
			if (res.status === 200) {
				dispatch(setQuestionLoading(false));
				dispatch(setQuestionData(res.data.results))
				toast({
					title: "Question gotten",
					status: "success",
					duration: 5000,
					isClosable: true,
					position: "top",
				});
			}
		} catch (error) {
			dispatch(setQuestionLoading(false));
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

	const saveAns = (newAns: string, questionIndex: number) => {
		if (questionData[questionIndex]?.correct_answer == newAns) {
			const prevScore = JSON.parse(`${localStorage.getItem('ansCount')}`)
			const newScore = prevScore + 1
			localStorage.setItem('ansCount', JSON.stringify(newScore))
		}
	}


	return {
		getQuestion,
		saveAns,
		questionLoading: questionLoading,
		questionData: questionData
	}
}

export default useQuestion 