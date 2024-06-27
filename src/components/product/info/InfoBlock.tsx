import React, { Dispatch, SetStateAction } from 'react';
import { BrandInt, ProductInt, VariantInt } from '@/types/products';
import { NameAndPrice } from './name/NameAndPrice';
import { VariantsBlock } from './variants/VariantsBlock';
import { Description } from './description/Description';
import { TechnicalDescription } from './technic/TechnicalDescription';
import { QuantityBlock } from './quantity/QuantityBlock';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { addProductToCart } from '@/redux/slices/cartSlice';
import styles from './info.module.scss';
import { addProductIntoCart } from '@/helpers/addProductIntoCart';

interface Props {
  product: ProductInt | null;
  brand: BrandInt | undefined;
  variants: VariantInt[];
}

export const InfoBlock: React.FC <Props> = ({ product, variants, brand }) => {
  const { language } = useSelector((state: RootState) => state.language);
  const [quantity, setQuantity] = React.useState(1);
  const [selectedVariant, setSelectedVariant] = React.useState(variants.length > 0 ? variants[0] : null);
  const [quantityError, setQuantityError] = React.useState('');
  const [afterAddedMessage, setAfterAddedMessage] = React.useState('');

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (variants.length) {
      setSelectedVariant(variants[0]);
    }
  }, [variants]);

  React.useEffect(() => {
    if (quantityError) {
      setTimeout(() => {
        setQuantityError('');
      }, 3000);
    }

    if (afterAddedMessage) {
      setTimeout(() => {
        setAfterAddedMessage('');
      }, 3000);
    }
  }, [quantityError, afterAddedMessage]);

  return (
    <div className={styles.info__item}>
      {product && (
        <React.Fragment>
          <NameAndPrice
            product={product}
            quantity={quantity}
          />
          <VariantsBlock
            variants={variants}
            selectedVariant={selectedVariant}
            setSelectedVariant={setSelectedVariant}
          />
          <QuantityBlock 
            quantity={quantity}
            setQuantity={setQuantity}
            selectedVariant={selectedVariant}
          />
          <Description 
            product={product}
          />
          <TechnicalDescription 
            product={product}
            brand={brand}
          />
          <p className={styles.info__quantity}>
            {quantityError}
          </p>
          <p className={styles.info__alert}>
            {afterAddedMessage}
          </p>
          <button
            onClick={() => {
              addProductIntoCart(selectedVariant, quantity, language, setQuantityError, product, dispatch, addProductToCart, setAfterAddedMessage);
            }}
            className={selectedVariant?.quantity === 0 ? styles.info__button + ' ' + styles['info__button--disabled'] : styles.info__button}
            disabled={selectedVariant?.quantity === 0}
          >
            {language === 'EN' ? 'Add to cart' : 'Додати до кошику'}
          </button>
        </React.Fragment>
      )}

    </div>
  );
};
