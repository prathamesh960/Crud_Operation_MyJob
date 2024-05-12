// import { useState } from "react";

// interface ValidationErrors {
//   [key: string]: string;
// }

// const useValidation = () => {
//   const allowedExtensionsRegex: RegExp = /^.*\.(doc|pdf)$/i;
//   const maxSizeInBytes: number = 1 * 1024 * 1024; // 1 MB

//   const eventHandler = (id: string, val: string | File): string => {
//     switch (id) {

//       // accept only letters and length of character up to 30
//       case "alphabet":
//         if (!new RegExp(/^[a-zA-Z]{1,30}$/).test(val as string))
//           return "Enter alphabets only";
//         else {
//           return "";
//         }

//       // accept only letters and space in between characters
//       case "alphabetsAndSpace":
//         if (!new RegExp(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/).test(val as string))
//           return "Input should contain alphabets with spaces only in between";
//         else {
//           return "";
//         }

    



//       // accept only numbers without starting from zero
//       case "numeric":
//         if (!new RegExp(/^[1-9][0-9]*$/).test(val as string))
//           return "Enter numbers only";
//         else {
//           return "";
//         }

//       // accept both letters and numeric value
//       case "alphanumeric":
//         if (!new RegExp(/^[0-9a-zA-Z,-]+$/).test(val as string))
//           return "Enter characters and numbers only";
//         else {
//           return "";
//         }





//       default:
//         return "";
//     }
//   };

//   return { eventHandler };
// };

// export default useValidation;




import { useState } from "react";

// Define an interface to represent validation error messages
interface ValidationErrors {
  [key: string]: string;
}

// Custom hook for handling validation logic
const useValidation = () => {
  // Define regular expressions and constants for validation
  const allowedExtensionsRegex: RegExp = /^.*\.(doc|pdf)$/i;
  const maxSizeInBytes: number = 1 * 1024 * 1024; // 1 MB

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
