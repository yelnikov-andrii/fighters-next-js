import React from 'react';
import { usePathname } from 'next/navigation'

export const useScrollTop = (value: any, offsetX: number = 0, offsetY: number = 0) => {
  const pathname = usePathname();

  React.useEffect(() => {
    window.scrollTo(offsetX, offsetY);
  }, [pathname, [...value]]);
};