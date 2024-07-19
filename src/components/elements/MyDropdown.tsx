import clsx from 'clsx';
import * as React from 'react';

interface Props {
    butttonContent: string;
    children: React.ReactNode;
    autoClose?: boolean;
}

function MyDropdown({ butttonContent, children, autoClose }: Props) {
    const [isOpen, setIsOpen] = React.useState(false);
    const dropdownRef = React.useRef<HTMLDivElement | null>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = (event: MouseEvent) => {
        const target = event.target as Node;
        if (dropdownRef.current && !dropdownRef.current.contains(target)) {
            setIsOpen(false);
        }
    };

    React.useEffect(() => {
        if (autoClose) {
            document.addEventListener('click', closeDropdown);
        }

        return () => {
            document.removeEventListener('click', closeDropdown);
        };
    }, []);

    return (
        <div
            className='relative rounded-lg p-0'
            ref={dropdownRef}
        >
            <div
                className='bg-gray py-2 px-4 rounded-lg hover:cursor-pointer'
                onClick={toggleDropdown}
            >
                {butttonContent}
            </div>
            <div
                className={clsx('absolute top-[130%] z-10 left-0 right-0 block bg-gray-light rounded-lg overflow-y-auto', {
                    'max-h-[200px] px-2': isOpen,
                    'max-h-[0px]': !isOpen
                })}
                // className={isOpen ? styles.mydropdown__content + ' ' + styles['mydropdown__content--open'] : styles.mydropdown__content}
            >
                {children}
            </div>
        </div>
    )
}

export default MyDropdown;