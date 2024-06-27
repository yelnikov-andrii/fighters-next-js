import React from 'react';
import styles from './dropdown.module.scss';

interface Props {
  butttonContent: string;
  children: React.ReactNode;
  autoClose?: boolean;
}

export const MyDropdown: React.FC <Props> = ({ butttonContent, children, autoClose }) => {
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
      className={styles.mydropdown} 
      ref={dropdownRef}
    >
      <div
        className={styles.mydropdown__button}
        onClick={toggleDropdown}
      >
        {butttonContent}
      </div>
        <div
          className={isOpen ? styles.mydropdown__content + ' ' + styles['mydropdown__content--open'] : styles.mydropdown__content}
        >
          {children}
        </div>
    </div>
  );
};
