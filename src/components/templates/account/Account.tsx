"use client";
import * as React from "react";
import { useTranslations } from "next-intl";
import LinkButton from "@/components/elements/link-button/LinkButton";
import { useEffect, useState } from "react";
import Loading from "@/components/modules/header/components/HeaderMain/components/Loading";

function Account() {
  const t = useTranslations("common");
  const [user, setUser] = useState<UserI>();

  useEffect(() => {
    fetch("/api/me", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("me:", data);
        setUser(data.user);
      })
      .catch(console.error);
  }, []);

  if (!user) {
    return (
      <section className="py-10">
        <div className="container text-center w-full">
          <Loading />
        </div>
      </section>
    );
  }

  return (
    <section className="py-10">
      <div className="container">
        <div className="flex justify-center items-center mb-4">
          <LinkButton
            url="#"
            style={{ border: "1px solid black", borderRadius: "4px" }}
            onClick={async (e) => {
              e.preventDefault();
              await fetch("/api/logout", { method: "GET" });
              window.location.href = "/login";
            }}
          >
            {t("logout")}
          </LinkButton>
        </div>
        <span className="block h-[1px] bg-[#ccc]"></span>
        <h1 className="text-4xl font-bold font-osvald text-center uppercase mb-8">
          {t("account")}
        </h1>
        <h2 className="text-2xl font-semibold text-center">
          <div>
            <p>Ім’я: {user?.name}</p>
            <p>Прізвище: {user?.lastName}</p>
            <p>Email: {user?.email}</p>
            <p>Phone: {user?.phone}</p>
          </div>
        </h2>
      </div>
    </section>
  );
}

export default Account;
