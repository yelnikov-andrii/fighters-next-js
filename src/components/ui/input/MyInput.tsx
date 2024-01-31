import React from 'react';
import styles from './input.module.scss';

export const MyInput: React.FC <any> = ({ value, setValue, placeholder }) => {
  return (
    <input 
      value={value}
      onChange={(e) => {
        setValue(e.target.value)
      }}
      placeholder={placeholder}
      className={styles.input}
    />
  )
}
