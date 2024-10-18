'use client'
import { FunctionComponent, MutableRefObject, useEffect, useRef, useState } from "react";
//components
import Nav from "./components/Nav";
import Categories from "./components/Categories";
// clsx
import clsx from "clsx";
import { fetchCurrencies } from "@/redux/action-creator/Currencies/fetchCurrencies";
import { useDispatch } from "react-redux";

interface HeaderMainProps {

}

const HeaderMain: FunctionComponent<HeaderMainProps> = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [categoriesAreOpen, setCategoriesAreOpen] = useState(true);

    const headerRef: MutableRefObject<HTMLHeadingElement | null> = useRef(null);

    const dispatch = useDispatch();

    useEffect(() => {
        let lastScrollPosition = window.pageYOffset;
        let isScrollingUp = false; // Флаг для направления прокрутки
        const scrollThreshold = 50; // Минимальное расстояние для срабатывания скролла
    
        const handleScroll = () => {
            let currentScrollPosition = window.pageYOffset;
            let scrollDifference = Math.abs(currentScrollPosition - lastScrollPosition); // Разница между текущей и последней позицией
    
            if (scrollDifference > scrollThreshold) {
                if (currentScrollPosition > lastScrollPosition) {
                    // Скроллим вниз
                    console.log('scrolling down');
                    if (isScrollingUp || categoriesAreOpen) {
                        setCategoriesAreOpen(false);
                        isScrollingUp = false;
                    }
                } else if (currentScrollPosition <= lastScrollPosition) {
                    // Скроллим вверх
                    console.log('scrolling up');
                    if (!isScrollingUp || !categoriesAreOpen) {
                        setCategoriesAreOpen(true);
                        isScrollingUp = true;
                    }
                }
                lastScrollPosition = currentScrollPosition; // Обновляем позицию только после значительного скролла
            }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        dispatch(fetchCurrencies());
    }, []);

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