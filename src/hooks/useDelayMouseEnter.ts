import React, { Dispatch, SetStateAction } from "react";

export const useDelayMouseenter = (isOpenState: {isOpen: boolean, isHovered: boolean}, setIsOpenState: Dispatch<SetStateAction<{isOpen: boolean, isHovered: boolean}>>) => {
  React.useEffect(() => {
    let timeoutId: any;

    if (isOpenState.isHovered === true) {
      timeoutId = setTimeout(() => {
        setIsOpenState(prev => ({...prev, isOpen: true}));
      }, 100);
    } else {
      timeoutId = setTimeout(() => {
        setIsOpenState(prev => ({...prev, isOpen: false}));
      }, 400);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isOpenState.isHovered]);
}