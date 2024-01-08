import Image from 'next/image'
import {useTranslations} from 'next-intl';
import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';
import { Metadata } from 'next';

export async function generateMetadata({params: {locale}}: {params: {locale: string}}): Promise<Metadata> {
  const t = await getTranslations({locale});
 
  return {
    title: t('Metadata.user_dashboard.title'),
    description: t('Metadata.user_dashboard.description')
  };
}

export default function Home({params: {locale}}: {params: {locale: string}}) {
  unstable_setRequestLocale(locale);

  const t = useTranslations('Index');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <span>{t('title')}</span>
    </main>
  )
}
