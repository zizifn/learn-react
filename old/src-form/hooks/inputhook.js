import { useState } from "react";

function useInput(initValue, validateFn) {
    const [enterValue, setEnterValue] = useState(initValue);
    const [didEdit, setDidedit] = useState(false);

    const isValid = validateFn(enterValue)

    function handleChanges( event) {
        setEnterValue(event.target.value);
        setDidedit(false);
      }
    
      function handleInputBlur() {
        console.log("handleInputBlur--");
        setDidedit(true);
      }
    return {
        value: enterValue,
        hasError: didEdit && !isValid,
        handleChanges,
        handleInputBlur
    }
}

export { useInput }