'use client';
import { toggleFilter } from '@/redux/slices/filterSlice';
import { RootState } from '@/redux/store';
import clsx from 'clsx';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Toolbar() {
    const dispatch = useDispatch();
    const { filterIsOpen } = useSelector((state: RootState) => state.filter);

    function handleToggle() {
        dispatch(toggleFilter());
    }

    return (
        <div className="flex justify-between py-4 border-border-color border-y-[1px]">
            <div className="flex gap-4 items-center">
                <button className="flex gap-2 items-center" onClick={handleToggle}>
                    <p className="font-medium">
                        Filter
                    </p>
                    <svg width="20" height="20" viewBox="0 0 20 20" stroke-width="1.25" stroke="currentColor" aria-hidden="true" focusable="false" role="presentation"><path stroke-linecap="round" stroke-linejoin="round" d="M1 6h18M1 14h18"></path><circle cx="7" cy="6" r="3" className={clsx('move-circle',{'move-circle-top': filterIsOpen })}></circle><circle cx="13" cy="14" r="3" className={clsx('move-circle',{ 'move-circle-bottom': filterIsOpen })} ></circle></svg>
                </button>
                <span className="w-[0.8px] h-[100%] bg-gray-dark opacity-20 block">
                </span>
            </div>
            <div>
                right
            </div>
        </div>
    );
}

export default Toolbar;