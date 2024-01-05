import { LocaleChange } from '@/components/LocaleChange';
import { LoginForm } from '@/components/LoginForm';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { Card, CardHeader, CardBody } from '@nextui-org/react';
import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';

export default function LoginPage({params: {locale}}: {params: {locale: string}}) {
  unstable_setRequestLocale(locale);

  const t = useTranslations('Login');
  return (
    <main className="grid place-items-center min-h-screen login-background relative overflow-hidden px-10">
      <div className="duration-300 bg-gradient-to-t dark:from-amber-100 dark:to-blue-50 from-blue-400 to-blue-50 w-48 lg:w-64 aspect-square absolute top-5 lg:top-20 left-0 -translate-x-1/2 rounded-full opacity-75"></div>
      <div className="duration-300 bg-gradient-to-t dark:from-amber-100 dark:to-blue-50 from-blue-400 to-blue-50 w-28 lg:w-36 aspect-square absolute top-0 lg:top-16 left-5 -translate-y-1/2 rounded-full opacity-75"></div>
      <div className="duration-300 bg-gradient-to-t dark:from-amber-100 dark:to-blue-50 from-blue-400 to-blue-50 w-64 lg:w-72 aspect-square absolute bottom-0 right-10 lg:right-0 translate-y-1/2 rounded-full opacity-75"></div>
      <Card className="grid grid-cols-1 bg-white shadow-xl container dark:text-white dark:bg-neutral-900">
        <div className="col-span-1 p-3">
          <CardHeader className="w-full flex items-center justify-between">
            <h1 className="font-extrabold text-xl">LOGO</h1>
            <div className="flex items-center gap-5">
              <LocaleChange />
              <ThemeSwitcher />
            </div>
          </CardHeader>
          <CardBody>
            <h1 className="text-lg font-bold">{t('title')}</h1>
            <span className="text-sm">{t('subtitle')}</span>
            <LoginForm />
          </CardBody>
        </div>
      </Card>
      
    </main>
  )
}