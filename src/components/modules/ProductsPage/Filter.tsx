import MyDropdown from '@/components/elements/dropdown/MyDropdown';
import { RootState } from '@/redux/store';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Colors from './Colors';
import { useGetAllOptions } from '@/hooks/filterHooks';
import { ProductInt } from '@/types/products';
import { addColorFilter, removeColorFilter } from '@/redux/slices/filterSlice';
import BlockWithFilterOptions from './BlockWithFilterOptions';
import { FilterOptionInt } from '@/types/filter';

interface Props {
    productsAllPages: ProductInt[];
}

function Filter({ productsAllPages }: Props) {
    const { language } = useSelector((state: RootState) => state.language);
    const { colors, options, brands } = useGetAllOptions(productsAllPages);
    const { countOfProducts, allProductsLoaded } = useSelector((state: RootState) => state.products);
    const { colorFilters, brandFilters, ageFilters, materialFilters, sizeFilters, genderFilters } = useSelector((state: RootState) => state.filter);
    const [allFilters, setAllFilters] = React.useState<any>({ colorFilters, brandFilters, ageFilters, materialFilters, sizeFilters, genderFilters });
    const dispatch = useDispatch();

    function colorClickAction(color: string) {
        if (colorFilters.includes(color)) {
            dispatch(removeColorFilter(color));
        } else {
            dispatch(addColorFilter(color));
        }
    }

    return (
        <div className='border-border-color border-r-[1px] pr-4 min-h-[200px] flex flex-col gap-4'>
            {/* <Clear
                    filtersAreEmpty={filtersAreEmpty}
                /> */}
            <MyDropdown
                butttonContent={language === 'EN' ? 'Colors' : 'Кольори'}
            >
                <Colors
                    colors={colors}
                    colorClickAction={colorClickAction}
                />
            </MyDropdown>
            <MyDropdown
                butttonContent={language === 'EN' ? 'Brands' : 'Бренди'}
            >
                <BlockWithFilterOptions
                    filterCategory='brands'
                    array={brands}
                />
            </MyDropdown>
            {options.map((option: FilterOptionInt) => (
                <MyDropdown
                    butttonContent={language === 'EN' ? option.name_en : option.name_ukr}
                    key={option.name_en}
                >
                    <BlockWithFilterOptions
                        array={option.arr}
                        filterCategory={option.filterCategory}
                    />
                </MyDropdown>
            ))}
        </div>
    );
}

export default Filter;