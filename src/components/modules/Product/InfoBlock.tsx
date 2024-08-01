import { RootState } from '@/redux/store';
import { BrandInt, ProductInt, VariantInt } from '@/types/products';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Variants } from './Variants';
import Quantity from './Quantity';
import MyDropdown from '@/components/elements/dropdown/MyDropdown';
import { addProductIntoCart } from '@/helpers/addProductIntoCart';
import { addProductToCart } from '@/redux/slices/cartSlice';

interface Props {
    product: ProductInt;
    variants: VariantInt[];
    brand: BrandInt | null;
}

function InfoBlock(props: Props) {
    const { language } = useSelector((state: RootState) => state.language);
    const { variants, product, brand } = props;
    const [quantity, setQuantity] = React.useState(1);
    const [selectedVariant, setSelectedVariant] = React.useState(variants.length > 0 ? variants[0] : null);
    const { currency, coefficient } = useSelector((state: RootState) => state.currency);

    const dispatch = useDispatch();

    React.useEffect(() => {
        if (variants.length) {
            setSelectedVariant(variants[0]);
        }
    }, [variants]);

    return (
        <div className="pt-8">
            {product && (
                <React.Fragment>
                    <h1 className='font-osvald text-xl font-bold mb-8'>
                        {language === 'EN' ? product.name_en : product.name_ukr}
                    </h1>
                    <strong className='text-2xl pb-8 border-border-color border-b block'>
                        {`${currency} ${(product.price * quantity * coefficient).toFixed(1).replace(/\.0$/, '')}`}
                    </strong>
                    <Variants
                        variants={variants}
                        selectedVariant={selectedVariant}
                        setSelectedVariant={setSelectedVariant}
                    />
                    <Quantity
                        quantity={quantity}
                        setQuantity={setQuantity}
                        selectedVariant={selectedVariant}
                        product={product}
                    />
                    <div className='py-4 border-border-color border-b'>
                        <MyDropdown
                            butttonContent={language === 'EN' ? 'Description' : 'Опис'}
                        >
                            <div className=''>
                                {language === 'EN' ? product.description_en : product.description_ukr}
                            </div>
                        </MyDropdown>
                    </div>
                    <div className='py-4 border-border-color border-b'>
                        <MyDropdown
                            butttonContent={language === 'EN' ? 'Technical specification' : 'Технічна специфікація'}
                        >
                            <div>
                                <p className=''>
                                    {language === 'EN' ? `Manufactured by: ${brand?.name}` : `Виготовлено: ${brand?.name}`}
                                </p>
                                <p className=''>
                                    {language === 'EN' ? `Material: ${product.material_en}` : `Матеріал: ${product.material_ukr}`}
                                </p>
                                <p className=''>
                                    {language === 'EN' ? `Gender: ${product.gender_en}` : `Стать: ${product.gender_ukr}`}
                                </p>
                                <p className=''>
                                    {language === 'EN' ? `Age: ${product.age_en}` : `Вік: ${product.age_ukr}`}
                                </p>
                            </div>
                        </MyDropdown>
                    </div>
                </React.Fragment>
            )}

        </div>
    );
}

export default InfoBlock;