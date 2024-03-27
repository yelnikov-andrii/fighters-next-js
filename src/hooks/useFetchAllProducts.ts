import React from "react";
import { fetchProductsAllPages } from "@/redux/action-creator/Products/fetchProducts";
import { AppDispatch } from "@/redux/store";

export const useFetchProductsAll = (category: string | null, subcategory: string | null, subsubcategory: string | null, page: number, dispatch: AppDispatch) => {

  React.useEffect(() => {
    if (category) {
        dispatch(fetchProductsAllPages(`category=${category}`));
        return;
    }

    if (subcategory) {
      dispatch(fetchProductsAllPages(`subcategory=${subcategory}`));
      return;
    }

    if (subsubcategory) {
      dispatch(fetchProductsAllPages(`subsubcategory=${subsubcategory}`));
      return;
    }
    
    dispatch(fetchProductsAllPages());
  }, [category, subcategory, subsubcategory, page]);
};