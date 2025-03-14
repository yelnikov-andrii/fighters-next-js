'use client';
import MySelect from '@/components/elements/select/MySelect';
import { toggleFilter } from '@/redux/slices/filterSlice';
import { setListView } from '@/redux/slices/listViewSlice';
import { setSort } from '@/redux/slices/sortSlice';
import { RootState } from '@/redux/store';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { useRouter, useSearchParams } from 'next/navigation';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Toolbar() {
    const dispatch = useDispatch();
    const { filterIsOpen } = useSelector((state: RootState) => state.filter);
    const { language } = useSelector((state: RootState) => state.language);
    const sortBy = useSelector((state: RootState) => state.sort.sortBy);
    const t = useTranslations('common');
    const sortOptions = ['alphAsc',
        'alphDesc',
        'priceAsc',
        'priceDesc'];
    const searchParams = useSearchParams();
    const router = useRouter();
    const urlSearchParams = new URLSearchParams(searchParams.toString());
    const [currentColor, setCurrentColor] = React.useState({ column: 'grey', row: '#000' });

    function handleChangeListView(view: string) {
        dispatch(setListView(view));
        if (view === 'column') {
            setCurrentColor((prev) => ({ ...prev, column: '#000', row: 'grey' }));
        } else {
            setCurrentColor((prev) => ({ ...prev, column: 'grey', row: '#000' }))
        }
    }

    function handleToggle() {
        dispatch(toggleFilter());
    }

    const sortBytext = t(sortBy);

    function addSortToUrl(item: string) {
        urlSearchParams.set('sort', item);

        if (language !== 'EN') {
            pushToUrlWhenLangChanged();
        }

        router.push(`?${urlSearchParams.toString()}`);
    }

    function pushToUrlWhenLangChanged() {
        urlSearchParams.set('lang', language.toLowerCase());
        router.push(`?${urlSearchParams.toString()}`);
        return;
    }

    React.useEffect(() => {
        if (language !== 'EN') {
            pushToUrlWhenLangChanged();
        }
    }, [language]);

    function setSortOption(option: string) {
        dispatch(setSort(option));
        addSortToUrl(option)
    }

    return (
        <div className="flex justify-between py-4 border-border-color border-y-[1px]">
            <div className="flex flex-1 gap-4">
                <button className="flex gap-2 items-center" onClick={handleToggle}>
                    <p className="font-bold">
                        {t("filter")}
                    </p>
                    <svg width="20" height="20" viewBox="0 0 20 20" strokeWidth="1.25" stroke="currentColor" aria-hidden="true" focusable="false" role="presentation"><path strokeLinecap="round" strokeLinejoin="round" d="M1 6h18M1 14h18"></path><circle cx="7" cy="6" r="3" className={clsx('move-circle', { 'move-circle-top': filterIsOpen })}></circle><circle cx="13" cy="14" r="3" className={clsx('move-circle', { 'move-circle-bottom': filterIsOpen })} ></circle></svg>
                </button>
                <span className="w-[0.8px] h-[100%] bg-gray-dark opacity-20 block">
                </span>
                <div className='flex gap-2 max-w-[340px] w-full'>
                    <p className='font-bold m-0 w-max'>
                        {t("sortBy")}
                    </p>
                    <div className='max-w-56 w-full'>
                        <MySelect
                            selected={sortBytext}
                            menuItems={sortOptions.map(option => ({
                                label: t(option),
                                value: option,
                            }))}
                            action={setSortOption}
                        />
                    </div>
                </div>
            </div>
            <div className='flex-1 flex gap-2 justify-end'>
                <button onClick={() => {
                    handleChangeListView('column');
                }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false" role="presentation"><g transform="translate(3 5.727)"><path stroke={currentColor.column} stroke-width="1.5" d="M4.364 1.091h13.091"></path><circle fill={currentColor.column} cx="1.091" cy="1.091" r="1.091"></circle></g><g transform="translate(3 10.91)"><path stroke={currentColor.column} stroke-width="1.5" d="M4.364 1.091h13.091"></path><circle fill={currentColor.column} cx="1.091" cy="1.091" r="1.091"></circle></g><g transform="translate(3 16.09)"><path stroke={currentColor.column} stroke-width="1.5" d="M4.364 1.091h13.091"></path><circle fill={currentColor.column} cx="1.091" cy="1.091" r="1.091"></circle></g></svg>
                </button>
                <button onClick={() => {
                    handleChangeListView('row');
                }}>
                    <svg width="24" height="24" fill='none' viewBox="0 0 24 24" stroke={currentColor.row} stroke-width="1.5" aria-hidden="true" focusable="false" role="presentation"><path d="M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 0h6v6h-6z"></path></svg>
                </button>
            </div>
        </div>
    );
}

export default Toolbar;