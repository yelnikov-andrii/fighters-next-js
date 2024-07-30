'use client'
import { FunctionComponent, MutableRefObject, useEffect, useRef, useState } from "react";
//components
import Nav from "./components/Nav";
import Categories from "./components/Categories";
// clsx
import clsx from "clsx";

interface HeaderMainProps {

}

const HeaderMain: FunctionComponent<HeaderMainProps> = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [categoriesAreOpen, setCategoriesAreOpen] = useState(true);
    const [position, setPosition] = useState(0);

    const headerRef: MutableRefObject<HTMLHeadingElement | null> = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            let moving = window.pageYOffset;
            setCategoriesAreOpen(position >= moving);
            setPosition(moving);
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [position]);

    return (
        <header className={clsx(
            'py-2 md:py-4 md:pb-0 bg-white top-0 z-40 shadow-lg',
            {
                'sticky sm:sticky md:static': isMenuOpen,
                'sticky': !isMenuOpen,
                'md:pb-2': !categoriesAreOpen
            }
        )}>
            <Nav menuState={{ isMenuOpen, setIsMenuOpen }} />
            <Categories headerRef={headerRef} menuState={{ isMenuOpen, setIsMenuOpen }} categoriesAreOpen={categoriesAreOpen} />
        </header>
    );
}

export default HeaderMain;