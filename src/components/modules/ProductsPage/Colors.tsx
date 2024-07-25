import { RootState } from '@/redux/store';
import clsx from 'clsx';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import * as React from 'react';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';

interface Props {
    colors: string[];
    colorClickAction: (color: string) => void;
}

function Colors({ colors, colorClickAction }: Props) {
    const { colorFilters } = useSelector((state: RootState) => state.filter);
    const searchParams = useSearchParams();

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)

            return params.toString();
        },
        [searchParams]
    );
    return (
        <div className='py-4 px-2 flex flex-col sm:flex-row gap-2 items-center'>
            {colors.map((color: string) => (
                <Link
                    href={colorFilters.includes(color) ? `?${createQueryString('colors', colorFilters.filter(col => col !== color).join(','))}` : `?${createQueryString('colors', [...colorFilters, color].join(','))}`}
                    className={clsx('w-[20px] h-[20px] rounded-full min-w-[20px] min-h-[20px] border-black border-[1px]', {
                        'border-[3px] border-black': colorFilters.includes(color)
                    })}
                    style={{ background: color === 'khaki' ? '#7E805D' : color }}
                    onClick={() => {
                        colorClickAction(color);
                    }}
                    key={color}
                >
                </Link>
            ))}
        </div>
    );
}

export default Colors;