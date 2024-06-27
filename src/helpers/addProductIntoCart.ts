import { ProductAdded, ProductInt, VariantInt } from "@/types/products";
import { Dispatch, SetStateAction } from "react";

export async function addProductIntoCart(selectedVariant: VariantInt | null, quantity: number, language: string, setQuantityError: Dispatch<SetStateAction<string>>, product: ProductInt, dispatch: any, addProductToCart: (product: ProductAdded) => void, setAfterAddedMessage: Dispatch<SetStateAction<string>>) {
  if (selectedVariant) {
    if (quantity > selectedVariant?.quantity) {
      if (language === 'EN') {
        setQuantityError(`You can not add to cart more than ${selectedVariant.quantity} items of this product`);
        return;
      } else {
        setQuantityError(`Ви не можете додати в кошик більше ${selectedVariant.quantity} найменувань цього продукту`);
        return;
      }
    } else {
      const newProductInCart = {...product, quantity, variant: selectedVariant};
      dispatch(addProductToCart(newProductInCart));
      if (language === 'EN') {
        setAfterAddedMessage('Product has been added successfully!');
      } else {
        setAfterAddedMessage('Продукт успішно доданий до кошику!');
      }
    }
  }
}