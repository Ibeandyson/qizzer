// GET ERROR MESSAGE
export const getErrorMessage = (error: any): string => {
  /*
    The "error" prop. is a response from axios
     The message is an object with the field name as key and error massage as values, 
     This Function returns the first value in the object, as the object(message) can contain more than one properties(fields)
  */

  const message: any =
    typeof error.response.data.message === "string"
      ? error.response.data.message
      : Object.values(error.response.data.message)[0];

  return message ? message : "";
};
