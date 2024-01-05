import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';

export default function LoginPage({params: {locale}}: {params: {locale: string}}) {
  unstable_setRequestLocale(locale);

  const t = useTranslations('Login');
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <span>{t('title')} Recover</span>
    </div>
  )
}