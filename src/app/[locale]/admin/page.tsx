import Image from 'next/image'
import {useTranslations} from 'next-intl';
import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';
import type { Metadata } from 'next';
import { Button } from '@nextui-org/react';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import toast from 'react-hot-toast';

export async function generateMetadata({params: {locale}}: {params: {locale: string}}): Promise<Metadata> {
  const t = await getTranslations({locale});
 
  return {
    title: t('Metadata.admin_dashboard.title'),
    description: t('Metadata.admin_dashboard.description')
  };
}

export default function AdminDashboard({params: {locale}}: {params: {locale: string}}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();
  const cookieStore = cookies()
  const db = createClient(cookieStore);

  const logOut = async () => {
    "use server"
    const {error} = await db.auth.signOut();
    if(error) toast.error(t('Common.sign_out', {error: error.message}))
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <span>{t('AdminDashboard.title')}</span>
        <form action={logOut}>
          <Button variant="light" type="submit">Salir</Button>
        </form>
    </main>
  )
}
