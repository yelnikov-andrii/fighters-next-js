import React from 'react';
import styles from './contact.module.scss';
import { MyInput } from '../ui/input/MyInput';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

export const Form = () => {
  const { language } = useSelector((state: RootState) => state.language);

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');

  return (
    <form className={styles.contact__form}>
      <div className={styles.contact__formblock}>
        <MyInput 
          value={name}
          setValue={setName}
          placeholder={language == 'EN' ? 'Name' : 'Ім\'я'}
        />
        <MyInput 
          value={email}
          setValue={setEmail}
          placeholder='Email'
        />
      </div>
      <div className={styles.contact__formblockfull}>
      <MyInput 
          value={phone}
          setValue={setPhone}
          placeholder='Phone'
        />
      </div>
      <div className={styles.contact__formblockfull}>
        <textarea 
          className={styles.contact__textarea}
          placeholder={language === 'EN' ? 'Comment' : 'Коментарій'}
        >
        </textarea>
      </div>
      <div>
        <button 
          type='submit'
          className={styles.contact__button}
        >
          {language === 'EN' ? 'Send' : 'Відправити'}
        </button>
      </div>
    </form>
  )
}
