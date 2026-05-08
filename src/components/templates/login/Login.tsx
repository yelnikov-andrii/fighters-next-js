"use client";
import * as React from "react";
import { useTranslations } from "next-intl";
import FormInput from "@/components/elements/input/FormInput";
import { useState } from "react";
import FormButton from "@/components/elements/form-button/FormButton";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Login() {
  const t = useTranslations("common");
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [alert, setAlert] = useState("");
  const [loading, setLoading] = useState(false);

  function onchangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setData((prev) => ({ ...prev, email: value }));
        break;
      case "password":
        setData((prev) => ({ ...prev, password: value }));
        break;
      default:
        return null;
    }
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: data?.email, password: data?.password }),
      });

      const result = await response.json();

      if (!response.ok) {
        setAlert(result?.message || t("error_login"));
        return;
      }

      router.push("/account");
    } catch (e: any) {
      const error = e.message;
      setAlert(error || t("error_login"));
    } finally {
      setLoading(false);
    }
  }

  function clearAlert() {
    setAlert("");
  }

  return (
    <section className="py-10">
      <div className="container">
        <h1 className="text-4xl font-bold font-osvald text-center uppercase mb-8">
          {t("login")}
        </h1>
        <form
          className="py-2 max-w-[400px] mx-auto flex flex-col gap-6"
          onSubmit={handleSubmit}
        >
          <FormInput
            value={data.email}
            change={onchangeHandler}
            label="Email"
            placeholder="Email"
            name="email"
            type="email"
          />
          <FormInput
            value={data.password}
            change={onchangeHandler}
            label={t("password")}
            placeholder={t("password")}
            name="password"
            type="password"
            reset={true}
          />
          <FormButton type="submit">
            {t("login")} {loading && <span className="dots"></span>}
          </FormButton>
        </form>
        <div className="text-center mt-8 flex gap-2 justify-center">
          <span>{t("new_customer")}</span>
          <Link href="/register" className="hover:text-silver transition-all">
            {t("register")}
          </Link>
        </div>
        {alert && (
          <div className="py-4 px-2 text-red font-bold border-2 border-red rounded-lg flex justify-center gap-2 items-center mt-2 max-w-[400px] mx-auto">
            <span>{alert}</span>
            <button
              className="rounded-lg border border-red p-2"
              onClick={clearAlert}
            >
              ok
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Login;
