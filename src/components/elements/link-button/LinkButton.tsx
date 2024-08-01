import * as React from 'react';
import Link from "next/link";
import clsx from 'clsx';

function LinkButton({ children, url, style, isDark }: { children: React.ReactNode, url: string, style?: any, isDark?: boolean }) {
  return (
    <Link href={url} className={clsx({
      'button button-dark': isDark,
      'button': !isDark
    })} style={style} >
      {children}
    </Link >
  );
}

export default LinkButton;