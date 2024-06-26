// Custom hook for handling validation logic
const useValidation = () => {

  // Function to handle validation events based on provided id and value
  const eventHandler = (id: string, val: string | File): string => {
    switch (id) {
      // Validate if the input contains only letters with length up to 30
      case "alphabet":
        if (!new RegExp(/^[a-zA-Z]{1,30}$/).test(val as string))
          return "Enter alphabets only";
        else {
          return ""; // No error
        }

      // Validate if the input contains only letters and spaces in between
      case "alphabetsAndSpace":
        if (!new RegExp(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/).test(val as string))
          return "Input should contain alphabets with spaces only in between";
        else {
          return ""; // No error
        }

      // Validate if the input contains only numeric characters without starting from zero
      case "numeric":
        if (!new RegExp(/^[1-9][0-9]*$/).test(val as string))
          return "Enter numbers only";
        else {
          return ""; // No error
        }

      // Validate if the input contains alphanumeric characters
      case "alphanumeric":
        if (!new RegExp(/^[0-9a-zA-Z,-]+$/).test(val as string))
          return "Enter characters and numbers only";
        else {
          return ""; // No error
        }

      default:
        return ""; // No error for unknown id
    }
  };

  return { eventHandler }; // Return the event handler function
};

export default useValidation; // Export the custom hook
