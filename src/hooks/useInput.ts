import * as React from 'react';

export const useInput = (searchInput: string) => {
    const [appliedInput, setAppliedInput] = React.useState('');
  
    let timerRef: React.MutableRefObject<any> = React.useRef();
  
    React.useEffect(() => {
      const delay = 1000;
  
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
  
      timerRef.current = setTimeout(() => {
        setAppliedInput(searchInput);
      }, delay);
  
      return () => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
      };
    }, [searchInput]);
  
    return appliedInput;
  }