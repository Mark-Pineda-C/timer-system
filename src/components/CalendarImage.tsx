"use client"

import { useTheme } from "next-themes"
import Image from "next/image"

import ClaendarLight from '../assets/calendar-light.png'
import ClaendarDark from '../assets/calendar-dark.png'

export const CalendarImage = () => {
  const {theme} = useTheme()
  return(
    <>
      {theme === 'dark' ? (
        <Image src={ClaendarDark} alt="calendar" width={450} height={350} className="w-64 xl:w-[400px]" priority/>
      ) : (
        <Image src={ClaendarLight} alt="calendar" width={450} height={350} className="w-64 xl:w-[400px]" priority/>
      ) }
    </>
  )
}