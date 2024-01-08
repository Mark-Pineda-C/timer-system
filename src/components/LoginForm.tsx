'use client'

import type { PostgrestError } from "@supabase/supabase-js";
import { Input, Button } from "@nextui-org/react"
import { MaterialSymbolsPersonRounded, MaterialSymbolsLockOpenRight, MaterialSymbolsLock } from "./svg"
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { toast } from "react-hot-toast";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const locale = useLocale();
  const t = useTranslations('Login');
  const db = createClient();
  const router = useRouter();

  const signIn = async (formData: FormData) => {
    setLoading(true);
    try{
      const email = formData.get('email') as string;
      const password = formData.get('password');
      if(!!!email.length){
        toast.error(t('errors.no_username'))
        return;
      }
      if(!!!password){
        toast.error(t('errors.no_password'))
        return;
      }
      const {data: user, error} = await db.from('profile').select('email').or(`user_name.eq.${email},email.eq.${email}`).single();
      if(error || !user){
        toast.error(t('errors.no_user'))
      }
      const { data: userData, error: loginError} = await db.auth.signInWithPassword({email: user!.email, password: password as string});
      if(loginError){
        toast.error(t('errors.failed_login'))
      }
      switch(userData?.user?.user_metadata.access_profile){
        case 'admin':
          router.replace(`/${locale}/admin/`);
          break;
        case 'user':
          router.replace('/'+locale);
          break;
        default:
          toast.error(t('errors.no_profile'))
          break;
      }
    } catch(e){
      toast.error(t('errors.unknown', { error: e as string }))
    } finally {
      setLoading(false);
    }
  }
  return (
    <form className="py-5 flex flex-col w-full lg:py-20" action={signIn}>
      <Input label={t('user')} className="w-full" variant="underlined" color="primary" name="email"/>
      <Input className="w-full" label={t('password')} variant="underlined" color="primary" type={visible ? "default" : "password"} name="password" endContent={
        <Button onClick={() => setVisible(!visible)} isIconOnly variant="light">
          {visible ? <MaterialSymbolsLockOpenRight className="text-lg text-primary-500 dark:text-amber-100"/> : <MaterialSymbolsLock className="text-lg text-primary-500 dark:text-amber-100"/>}
        </Button>
      }/>
      <Button className="mt-10" color="primary" type="submit" isLoading={loading}>{t('title')}</Button>
    </form>
  )
}