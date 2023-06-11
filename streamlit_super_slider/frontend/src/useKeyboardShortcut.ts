import { useEffect, useRef } from "react";
import { createKeyboardShortcutHandler } from "./callbackHandlers";

export const useKeyboardShortcut = (
    value: number,
    handleOnChange: (value: number) => void,
    updateStreamlit: () => void
  ) => {
    const valueRef = useRef(value);
    const handleOnChangeRef = useRef(handleOnChange);

    useEffect(() => {
      valueRef.current = value;
      handleOnChangeRef.current = handleOnChange;
    }, [value, handleOnChange]);

    useEffect(() => {
      const keyboardShortcutHandler = createKeyboardShortcutHandler(
        () => handleOnChangeRef.current(valueRef.current + 1),
        () => handleOnChangeRef.current(valueRef.current - 1),
        updateStreamlit
      );
      // TODO - enable if in release mode. This doesn't work with the npm run start, but works when build and deployed
      window.parent.document.addEventListener("keydown", keyboardShortcutHandler);
      // window.addEventListener("keydown", keyboardShortcutHandler);

      return () => {
        // TODO - enable if in release mode. This doesn't work with the npm run start, but works when build and deployed
        window.parent.document.removeEventListener("keydown", keyboardShortcutHandler);
        // window.removeEventListener("keydown", keyboardShortcutHandler);
      };
    }, [updateStreamlit]);
  };
