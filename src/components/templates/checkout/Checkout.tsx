"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import Loading from "@/components/modules/header/components/HeaderMain/components/Loading";
import CheckoutForm from "@/components/modules/checkout/CheckoutForm";
import CheckoutSummary from "@/components/modules/checkout/CheckoutSummary";

function Checkout() {
  const [user, setUser] = useState<UserI | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/me", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data.user);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="py-10">
        <div className="container text-center">
          <Loading />
        </div>
      </section>
    );
  }

  return (
    <section className="py-10">
      <div className="container grid grid-cols-2 gap-10">
        <CheckoutForm user={user} />
        <CheckoutSummary />
      </div>
    </section>
  );
}

export default Checkout;
