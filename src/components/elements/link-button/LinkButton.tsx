"use client";
import * as React from "react";
import Link from "next/link";
import clsx from "clsx";

function LinkButton({
  children,
  url,
  style,
  isDark,
  onClick,
}: {
  children: React.ReactNode;
  url: string;
  style?: any;
  isDark?: boolean;
  onClick?: (e: any) => void;
}) {
  return (
    <Link
      href={url}
      className={clsx({
        "button button-dark": isDark,
        button: !isDark,
      })}
      style={style}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

export default LinkButton;
