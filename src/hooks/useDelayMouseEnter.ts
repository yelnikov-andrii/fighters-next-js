import React, { Dispatch, SetStateAction } from "react";

export const useDelayMouseenter = (isHovered: boolean, setIsOpen: Dispatch<SetStateAction<boolean>>) => {
  React.useEffect(() => {
    let timeoutId: any;

    if (isHovered) {
      timeoutId = setTimeout(() => {
        setIsOpen(true);
      }, 500);
    } else {
      clearTimeout(timeoutId);
      setIsOpen(false);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isHovered]);
}