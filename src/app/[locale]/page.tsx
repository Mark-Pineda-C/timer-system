import Image from 'next/image'
import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';

export default function Home({params: {locale}}: {params: {locale: string}}) {
  unstable_setRequestLocale(locale);

  const t = useTranslations('Index');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <span>{t('title')}</span>
    </main>
  )
}
