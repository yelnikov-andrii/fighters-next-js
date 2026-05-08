import FormButton from "@/components/elements/form-button/FormButton";
import FormInput from "@/components/elements/input/FormInput";
import { RootState } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import Alert from "@/components/elements/alert/Alert";
import { clearCart } from "@/redux/slices/cartSlice";

const CheckoutForm = ({ user }: { user: UserI | null }) => {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    phone: "",
    address: "",
    email: "",
  });

  const t = useTranslations("common");
  const router = useRouter();

  const { productsInCart } = useSelector((state: RootState) => state.cart);
  const [alert, setAlert] = useState({ success: "", failed: "" });

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      setForm({
        name: user.name || "",
        lastName: user.lastName || "",
        phone: user.phone || "",
        address: "",
        email: user.email || "",
      });
    }
  }, [user]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function showError(message: string) {
    setAlert({
      success: "",
      failed: message,
    });

    setTimeout(() => {
      setAlert({
        success: "",
        failed: "",
      });
    }, 2000);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.name) return showError("Name required");
    if (!form.phone) return showError("Phone required");
    if (!form.address) return showError("Address required");
    if (!form.email) return showError("Email required");

    if (!productsInCart?.length) {
      showError("No goods selected");
      return;
    }

    const phoneRegex = /^\+?[0-9]{10,15}$/;

    if (!phoneRegex.test(form.phone)) {
      showError("Invalid phone");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email)) {
      return showError("Invalid email");
    }

    const res = await fetch("/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: productsInCart,
        ...form,
      }),
    });

    if (res.ok) {
      setAlert({
        success: "Order created",
        failed: "",
      });

      dispatch(clearCart());

      setTimeout(() => {
        router.push("/success");
      }, 1500);
    } else {
      showError("Something went wrong");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">{t("checkout")}</h2>

      <FormInput
        name="name"
        value={form.name}
        change={handleChange}
        label="Name"
        placeholder="Name"
        type="text"
      />

      <FormInput
        name="lastName"
        value={form.lastName}
        change={handleChange}
        label="Last name"
        placeholder="Last name"
        type="text"
      />

      <FormInput
        name="email"
        value={form.email}
        change={handleChange}
        label="Email"
        placeholder="Email"
        type="text"
      />

      <FormInput
        name="phone"
        value={form.phone}
        change={handleChange}
        label="Phone"
        placeholder="Phone"
        type="tel"
      />

      <FormInput
        name="address"
        value={form.address}
        change={handleChange}
        label="Address"
        placeholder="Address"
        type="text"
      />

      <FormButton type="submit">Place order</FormButton>

      {alert.failed && <Alert message={alert.failed} type="error" />}
      {alert.success && <Alert message={alert.success} type="success" />}
    </form>
  );
};

export default CheckoutForm;
