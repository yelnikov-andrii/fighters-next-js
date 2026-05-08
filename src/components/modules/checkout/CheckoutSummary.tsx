import React from "react";
import ProductInCart from "@/components/modules/cart/ProductInCart";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useTranslations } from "next-intl";

const CheckoutSummary = () => {
  const { productsInCart } = useSelector((state: RootState) => state.cart);
  const { currency, coefficient } = useSelector(
    (state: RootState) => state.currency,
  );
  const t = useTranslations("common");

  const total = productsInCart?.reduce((acc: number, item: ProductAdded) => {
    return acc + item.price * item.quantity;
  }, 0);
  return (
    <div className="border p-6">
      <h2 className="text-xl font-bold mb-4">{t("order_summary")}</h2>

      <div className="flex flex-col gap-2 mb-4">
        {productsInCart?.map((item: ProductAdded) => (
          <div key={item.id} className="flex justify-between">
            <ProductInCart product={item} />
            <span>
              {currency} {(item.price * item.quantity * coefficient).toFixed(1)}
            </span>
          </div>
        ))}
      </div>

      <div className="flex justify-between font-bold text-lg">
        <span>{t("total")}</span>
        <span>
          {currency} {(total || 0 * coefficient).toFixed(1)}
        </span>
      </div>
    </div>
  );
};

export default CheckoutSummary;
