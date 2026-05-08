import clsx from "clsx";
import React from "react";

const Alert = ({
  message,
  type,
}: {
  message: string;
  type: "success" | "error";
}) => {
  return (
    <div
      className={clsx(
        "py-4 px-2 font-bold border-2 rounded-lg flex justify-center items-center mt-2 max-w-[400px] mx-auto",
        {
          "text-green border-green": type === "success",
          "text-red border-red": type === "error",
        },
      )}
    >
      {message}
    </div>
  );
};

export default Alert;
