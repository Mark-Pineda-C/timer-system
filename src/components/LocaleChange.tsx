"use client"

import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem, Button } from "@nextui-org/react";
import { MaterialSymbolsLanguage } from "./svg";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/navigation";
import { useSearchParams } from "next/navigation";

export const LocaleChange = () => {
  const t = useTranslations('Common');
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setLocale = (newLocale: string) => () => {
    let newPathname = pathname + "?" + searchParams.toString();
    router.push(newPathname,{ locale: newLocale })
  }
  return (
    <Dropdown offset={-5} backdrop="blur">
      <DropdownTrigger>
        <Button isIconOnly variant="light">
          <MaterialSymbolsLanguage className="text-xl"/>
        </Button>
      </DropdownTrigger>
      <DropdownMenu variant="light" color="default" aria-label="Seleccion de idioma">
        <DropdownItem key="es" onClick={setLocale('en')}>
          {t('locales.en')}
        </DropdownItem>
        <DropdownItem key="en" onClick={setLocale('es')}>
          {t('locales.es')}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}