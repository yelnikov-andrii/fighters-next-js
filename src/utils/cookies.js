import Cookies from 'js-cookie';

export const setLanguageCookie = (language) => {
  Cookies.set('language', language, { expires: 365 });
};

export const getLanguageCookie = () => {
  return Cookies.get('language');
};

// export const setCurrencyCookie = (currency) => {
//   Cookies.set('currency', currency, { expires: 365 });
// };

// export const getCurrencyCookie = () => {
//   return Cookies.get('currency');
// };