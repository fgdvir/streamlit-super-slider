import { useEffect } from "react";

// Custom hook to handle mouseup and touchend events
export const useMouseUpHandler = (handler: () => void) => {
  useEffect(() => {
    window.addEventListener("mouseup", handler);
    window.addEventListener("touchend", handler);

    return () => {
      window.removeEventListener("mouseup", handler);
      window.removeEventListener("touchend", handler);
    };
  }, [handler]);
};

// Custom hook to handle keydown events
export const useKeyDownHandler = (handler: (event: KeyboardEvent) => void) => {
  useEffect(() => {
    window.addEventListener("keydown", handler);

    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, [handler]);
};


export const createHandleInputValueChange = (
    minValue: number,
    maxValue: number,
    setInputValue: (value: number) => void,
    handleOnChange: (value: number) => void
    ): ((event: React.ChangeEvent<HTMLInputElement>)=>void) => {

    const handleInputValueChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newValue = parseInt(event.target.value)
        if (isNaN(newValue) || newValue < minValue || newValue > maxValue) {
            return;
        }
        if (
            !isNaN(newValue) &&
            newValue >= minValue &&
            newValue <= maxValue
        ) {
            setInputValue(newValue);
            handleOnChange(newValue);
        }
    };
    return handleInputValueChange;
};

/**
 * Use this handler to capture the input change from a text input. Will only accept values between min and max values and apply the changes only when the user presses enter key
 * 
 * @param minValue min value to accept
 * @param maxValue max value to accept
 * @param handleOnChange Handler that takes care of changes in the input value. This handler should be called on any change
 * @param updateStreamlit Handler that finalize actions. This handler is called only when the action is finalized (for example, when the user presses enter key)
 * @returns 
 */
export const createInputChange = (
	minValue: number,
	maxValue: number,
	handleOnChange: (value: number) => void,
	updateStreamlit: () => void
	): ((event: React.KeyboardEvent<HTMLInputElement>)=>void) => {
			
		const handleInputChange = (
				event: React.KeyboardEvent<HTMLInputElement>
			) => {
				if (event.key !== "Enter") {
					return;
				};

				const inputValue = parseInt((event.target as HTMLInputElement).value, 10);
				if (
					!isNaN(inputValue) &&
					inputValue >= minValue &&
					inputValue <= maxValue
				) {
					handleOnChange(inputValue);
					updateStreamlit();
				}
			}
			
				return handleInputChange;

};

export const createKeyboardShortcutHandler = (
  handleIncrement: () => void,
  handleDecrement: () => void,
	updateStreamlit: () => void
): ((event: KeyboardEvent) => void) => {
  const handleKeyboardShortcut = (event: KeyboardEvent) => {
    if (event.key === ".") {
      handleIncrement();
    } else if (event.key === ",") {
      handleDecrement();
    } else {
      return;
    }
		updateStreamlit();
  };

  return handleKeyboardShortcut;
};



