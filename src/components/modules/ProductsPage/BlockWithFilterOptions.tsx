import { addAgeFilter, addBrandFilter, addGenderFilter, addMaterialFilter, addSizeFilter, removeAgeFilter, removeBrandFilter, removeGenderFilter, removeMaterialFilter, removeSizeFilter } from '@/redux/slices/filterSlice';
import { RootState } from '@/redux/store';
import { useRouter, useSearchParams } from 'next/navigation';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Option } from '@/types/filter';

interface Props {
    array: Option[];
    filterCategory: string;
  }

function BlockWithFilterOptions({ array, filterCategory }: Props) {
    const { language } = useSelector((state: RootState) => state.language);
    const { brandFilters, ageFilters, materialFilters, genderFilters, sizeFilters } = useSelector((state: RootState) => state.filter);
    const searchParams = useSearchParams();
    const router = useRouter();

    const dispatch = useDispatch();

    function handleCheckboxChange(e: React.ChangeEvent<HTMLInputElement>, item: Option, filterCategory: string) {
        const urlSearchParams = new URLSearchParams(searchParams.toString());

        if (e.target.checked === false) {
            switch (filterCategory) {
                case 'ages':
                    dispatch(removeAgeFilter(item));
                    removeFilterFromUrl(urlSearchParams, 'ages', item);
                    break;
                case 'brands':
                    dispatch(removeBrandFilter(item));
                    removeFilterFromUrl(urlSearchParams, 'brands', item);
                    break;
                case 'materials':
                    dispatch(removeMaterialFilter(item));
                    removeFilterFromUrl(urlSearchParams, 'materials', item);
                    break;
                case 'genders':
                    dispatch(removeGenderFilter(item));
                    removeFilterFromUrl(urlSearchParams, 'genders', item);
                    break;
                case 'sizes':
                    dispatch(removeSizeFilter(item));
                    removeFilterFromUrl(urlSearchParams, 'sizes', item);
                    break;
                default:
                    return;
            }
        } else {
            switch (filterCategory) {
                case 'ages':
                    dispatch(addAgeFilter(item));
                    addFilterToUrl(urlSearchParams, 'ages', item);
                    break;
                case 'brands':
                    dispatch(addBrandFilter(item));
                    addFilterToUrl(urlSearchParams, 'brands', item);
                    break;
                case 'materials':
                    dispatch(addMaterialFilter(item));
                    addFilterToUrl(urlSearchParams, 'materials', item);
                    break;
                case 'genders':
                    dispatch(addGenderFilter(item));
                    addFilterToUrl(urlSearchParams, 'genders', item);
                    break;
                case 'sizes':
                    dispatch(addSizeFilter(item));
                    addFilterToUrl(urlSearchParams, 'sizes', item);
                    break;
                default:
                    return;
            }
        }

        router.push(`?${urlSearchParams.toString()}`);
    }

    function addFilterToUrl(urlSearchParams: URLSearchParams, category: string, item: Option) {
        const filters = urlSearchParams.get(category)?.split(',') || [];
        if (item?.name_en) {
            filters.push(item.name_en);
        }

        if (item?.name) {
            filters.push(item.name);
        }

        urlSearchParams.set(category, filters.join(','));
    }

    function removeFilterFromUrl(urlSearchParams: URLSearchParams, category: string, item: Option) {
        const filters = urlSearchParams.get(category)?.split(',') || [];
        if (item.name) {
            const newFilters = filters.filter(filter => filter !== item.name);
            if (newFilters.length > 0) {
                urlSearchParams.set(category, newFilters.join(','));
            } else {
                urlSearchParams.delete(category);
            }
        }

        if (item.name_en) {
            const newFilters = filters.filter(filter => filter !== item.name_en);
            if (newFilters.length > 0) {
                urlSearchParams.set(category, newFilters.join(','));
            } else {
                urlSearchParams.delete(category);
            }
        }

    }

    return (
        <div className='flex flex-col gap-4 pt-4'>
            {array.map((item: Option) => (
                <div
                    key={filterCategory === 'brands' ? item.name : item.name_en}
                    className='flex items-center gap-2'
                >
                    <input
                        type='checkbox'
                        onChange={(e) => {
                            handleCheckboxChange(e, item, filterCategory);
                        }}
                        checked={
                            filterCategory === 'brands'
                                ? brandFilters.find(filter => filter.name === item.name) ? true : false
                                : filterCategory === 'ages'
                                    ? ageFilters.find(filter => filter.name_en === item.name_en) ? true : false
                                    : filterCategory === 'materials'
                                        ? materialFilters.find(filter => filter.name_en === item.name_en) ? true : false
                                        : filterCategory === 'sizes'
                                            ? sizeFilters.find(filter => filter.name_en === item.name_en) ? true : false
                                            : genderFilters.find(filter => filter.name_en === item.name_en) ? true : false
                        }
                    />
                    <span>
                        {filterCategory === 'brands' ? item.name : (language === 'EN' ? item.name_en : item.name_ukr)}
                    </span>
                </div>
            ))}
        </div>
    );
}

export default BlockWithFilterOptions;