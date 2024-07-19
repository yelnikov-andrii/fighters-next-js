import {getRequestConfig} from 'next-intl/server';
import { cookies } from 'next/headers'
 
export default getRequestConfig(async () => {
  const cookieStore = cookies();
  const language = cookieStore.get('language');
  const locale = language?.value || 'en';
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});