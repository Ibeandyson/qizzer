// GET ERROR MESSAGE
export const getErrorMessage = (error: any) => {
  /*
    The "error" prop. is a response from axios
     The message is an object with the field name as key and error massage as values, 
     This Function returns the first value in the object, as the object(message) can contain more than one properties(fields)
    */
  return Object.values(error.response.data.message)[0];
};
