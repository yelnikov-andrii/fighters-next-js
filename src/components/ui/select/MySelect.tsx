import React from 'react';
import styles from './myselect.module.scss';

interface Props {
  options: string[];
  change: (option: string) => void;
  selOption: string;
}

export const MySelect: React.FC <Props> = ({ options, change, selOption }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    change(option);
    setIsOpen(false);
  };

  const closeDropdown = (event: MouseEvent) => {
    const target = event.target as Node;
    if (dropdownRef.current && !dropdownRef.current.contains(target)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', closeDropdown);

    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, []);

  return (
    <div
      className={styles.myselect} 
      ref={dropdownRef}
    >
      <div  
        onClick={toggleDropdown}
        className={styles.myselect__button}
      >
        {selOption}
      </div>
      {isOpen && (
        <div 
          className={isOpen ? styles.myselect__options : styles.myselect__options + ' ' + styles['myselect__options--hidden']}
        >
          {options.map((option: string, index: number) => (
            <div
              key={option + index}
              onClick={() => handleOptionClick(option)}
              className={styles.myselect__option}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

