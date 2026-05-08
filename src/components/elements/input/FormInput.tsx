import { useTranslations } from "next-intl";
import Link from "next/link";
import * as React from "react";

interface Props {
  label: string;
  value: string;
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  name: string;
  type: string;
  reset?: boolean;
  pattern?: string;
}

function FormInput(props: Props) {
  const { label, value, change, placeholder, name, type, reset, pattern } =
    props;
  const t = useTranslations("common");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    change(e);
  }
  return (
    <div className="flex flex-col gap-2">
      <label className="font-bold">{label}</label>
      {reset ? (
        <div className="relative">
          <input
            className="border border-input-border py-2 px-4 rounded-sm transition-all w-full"
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={handleChange}
            type={type}
            pattern={pattern}
          />
          <Link
            className="absolute right-[10px] top-[50%] translate-y-[-50%] hover:text-silver hover:underline transition-all"
            href="/account/forgot-password"
          >
            {t("forgot_password")}
          </Link>
        </div>
      ) : (
        <input
          className="border border-input-border py-2 px-4 rounded-sm transition-all"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={handleChange}
          type={type}
          pattern={pattern}
        />
      )}
    </div>
  );
}

export default FormInput;
