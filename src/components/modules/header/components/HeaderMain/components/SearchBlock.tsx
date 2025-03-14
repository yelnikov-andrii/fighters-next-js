import { useInput } from '@/hooks/useInput';
import { RootState } from '@/redux/store';
import { useTranslations } from 'next-intl';
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import SearchResults from './SearchResults';


export default function SearchBlock() {
      const [placeholder, setPlaceholder] = useState('');
      const language = useSelector((state: RootState) => state.language.language);
      const [isVisible, setIsVisible] = useState(true);
      const [indexes, setIndexes] = useState({ index: 0, currentIndex: 0 });
      const t = useTranslations('common');
      const [query, setQuery] = useState('');

      const inputRef = useRef(null);

      const appliedInput = useInput(query);

      const phrases = [t("searching_boxing_gloves"), t("searching_gi")];

      useEffect(() => {
        const text = phrases[indexes.index];
        if (indexes.currentIndex < text.length) {
          const timeout = setTimeout(() => {
            setPlaceholder(prevText => prevText + text[indexes.currentIndex]);
            setIndexes(prev => ({ ...prev, currentIndex: prev.currentIndex + 1 }));
          }, 100);
    
          return () => clearTimeout(timeout);
        } else {
          setTimeout(() => {
            setPlaceholder('');
            setIndexes(prev => ({ ...prev, index: (prev.index + 1) % phrases.length }));
            setIndexes(prev => ({ ...prev, currentIndex: 0 }));
          }, 2500);
        }
      }, [indexes, phrases]);

    return (
        <div className="order-2 basis-full md:order-1 grow-[6] lg:grow-[4] md:basis-auto relative h-10">
            <button
                className="absolute left-4 z-10 hover:cursor-pointer"
                aria-label="Search button"
                style={{ width: '21px', height: '23px', top: '50%', transform: 'translate(0,-50%)' }}
            >
                <svg width="21" height="23" viewBox="0 0 21 23" fill="currentColor" aria-hidden="true" focusable="false" role="presentation"><path d="M14.398 14.483 19 19.514l-1.186 1.014-4.59-5.017a8.317 8.317 0 0 1-4.888 1.578C3.732 17.089 0 13.369 0 8.779S3.732.472 8.336.472c4.603 0 8.335 3.72 8.335 8.307a8.265 8.265 0 0 1-2.273 5.704ZM8.336 15.53c3.74 0 6.772-3.022 6.772-6.75 0-3.729-3.031-6.75-6.772-6.75S1.563 5.051 1.563 8.78c0 3.728 3.032 6.75 6.773 6.75Z"></path></svg>
            </button>
            <input
                className="rounded-md ps-16 bg-gray full-size absolute left-0 right-0 top-0 bottom-0"
                placeholder={placeholder}
                ref={inputRef}
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value)
                }}
                onClick={(e) => {
                    setIsVisible(true);
                }}
            />
            <SearchResults
                query={appliedInput}
                language={language}
                inputRef={inputRef}
                isVisible={isVisible}
                setIsVisible={setIsVisible}
            />
        </div>
    )
}