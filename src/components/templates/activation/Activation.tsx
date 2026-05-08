"use client";
import { useTranslations } from "next-intl";
import { ChangeEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import FormInput from "@/components/elements/input/FormInput";
import FormButton from "@/components/elements/form-button/FormButton";
import Alert from "@/components/elements/alert/Alert";

function Activation() {
  const router = useRouter();
  const t = useTranslations("common");

  const [alert, setAlert] = useState({ success: "", failed: "" });
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  function onchangeHandler(e: ChangeEvent<HTMLInputElement>) {
    setCode(e.target.value);
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/activate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code,
          email,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setAlert({ success: "Account activated", failed: "" });

        setTimeout(() => {
          router.push("/login");
        }, 2000);
      } else {
        setAlert({ success: "", failed: "Error" });
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-10">
      <div className="container">
        <h1 className="text-4xl font-bold font-osvald text-center uppercase mb-8">
          {/* {t("register")} */}
          Активація акаунту
        </h1>
        <form
          className="py-2 max-w-[400px] mx-auto flex flex-col gap-6"
          onSubmit={handleSubmit}
        >
          <FormInput
            value={code}
            change={onchangeHandler}
            label="Code"
            placeholder="Code"
            name="code"
            type="text"
          />
          <FormButton type="submit">
            {loading ? "Loading..." : "Activation"}
          </FormButton>
        </form>
        {alert.success && <Alert type="success" message={alert.success} />}
        {alert.failed && <Alert type="error" message={alert.failed} />}
      </div>
    </section>
  );
}

export default Activation;
