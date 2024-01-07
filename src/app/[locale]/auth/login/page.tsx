import { CalendarImage } from '@/components/CalendarImage';
import { LocaleChange } from '@/components/LocaleChange';
import { LoginForm } from '@/components/LoginForm';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { Card, CardHeader, CardBody } from '@nextui-org/react';
import { Metadata } from 'next';
import {useTranslations} from 'next-intl';
import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';

export async function generateMetadata({params: {locale}}: {params: {locale: string}}): Promise<Metadata> {
  const t = await getTranslations({locale});
 
  return {
    title: t('Metadata.login.title'),
    description: t('Metadata.login.description')
  };
}

export default function LoginPage({params: {locale}}: {params: {locale: string}}) {
  unstable_setRequestLocale(locale);

  const t = useTranslations('Login');
  return (
    <main className="grid place-items-center min-h-screen login-background relative overflow-hidden px-10">
      <div className="duration-300 bg-gradient-to-t dark:from-amber-100 dark:to-blue-50 from-blue-400 to-blue-50 w-48 lg:w-64 aspect-square absolute top-5 lg:top-20 left-0 -translate-x-1/2 rounded-full opacity-75"></div>
      <div className="duration-300 bg-gradient-to-t dark:from-amber-100 dark:to-blue-50 from-blue-400 to-blue-50 w-28 lg:w-36 aspect-square absolute top-0 lg:top-16 left-5 -translate-y-1/2 rounded-full opacity-75"></div>
      <div className="duration-300 bg-gradient-to-t dark:from-amber-100 dark:to-blue-50 from-blue-400 to-blue-50 w-64 lg:w-72 aspect-square absolute bottom-0 right-10 lg:right-0 translate-y-1/2 rounded-full opacity-75"></div>
      <Card className="grid grid-cols-1 bg-white shadow-xl container dark:text-white dark:bg-neutral-900 md:grid-cols-2 lg:h-5/6 xl:grid-cols-3">
        <div className="col-span-1 p-3 lg:p-5 xl:p-10">
          <CardHeader className="w-full flex items-center justify-between">
            <h1 className="font-extrabold text-xl">LOGO</h1>
            <div className="flex items-center gap-5">
              <LocaleChange />
              <ThemeSwitcher />
            </div>
          </CardHeader>
          <CardBody className='lg:flex lg:flex-col lg:justify-center lg:h-full'>
            <h1 className="text-lg font-bold">{t('title')}</h1>
            <span className="text-sm">{t('subtitle')}</span>
            <LoginForm />
          </CardBody>
        </div>
        <div className="max-md:hidden col-span-1 bg-gradient-to-tr dark:from-amber-200 dark:to-amber-50 from-blue-600 to-blue-200 grid place-items-center xl:col-span-2">
          <div className="splash-background w-3/5 aspect-square rounded-full grid place-items-center relative">
            <div className="splash-background w-4/5 aspect-square rounded-full"></div>
            <div className="splash-background w-10 aspect-square rounded-full grid place-items-center absolute bottom-3 left-3 lg:bottom-5 lg:left-5 xl:bottom-10 xl:left-10 xl:w-16 2xl:bottom-14 2xl:left-14"></div>
            <div className="absolute">
              <CalendarImage />
            </div>
          </div>
          
        </div>
      </Card>
      
    </main>
  )
}