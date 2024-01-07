'use client'

import { Input, Button } from "@nextui-org/react"
import { MaterialSymbolsPersonRounded, MaterialSymbolsLockOpenRight, MaterialSymbolsLock } from "./svg"
import { useState } from "react";
import { useTranslations } from "next-intl";

export const LoginForm = () => {
  const [visible, setVisible] = useState(false);
  const t = useTranslations('Login');
  return (
    <form className="py-5 flex flex-col w-full lg:py-20">
      <Input label={t('user')} className="w-full" variant="underlined" color="primary"/>
      <Input className="w-full" label={t('password')} variant="underlined" color="primary" type={visible ? "default" : "password"} endContent={
        <Button onClick={() => setVisible(!visible)} isIconOnly variant="light">
          {visible ? <MaterialSymbolsLockOpenRight className="text-lg text-primary-500 dark:text-amber-100"/> : <MaterialSymbolsLock className="text-lg text-primary-500 dark:text-amber-100"/>}
        </Button>
      }/>
      <Button className="mt-10" color="primary">{t('title')}</Button>
    </form>
  )
}