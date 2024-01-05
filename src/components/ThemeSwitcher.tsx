"use client"
import { useTheme } from "next-themes"
import { MaterialSymbolsDarkMode, MaterialSymbolsSunny } from "./svg"
import { Button } from "@nextui-org/react"

export default function ThemeSwitcher () {
  const {theme, setTheme} = useTheme()
  
  const handler = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Button onClick={handler} isIconOnly variant="light">
      {theme === "dark" ? <MaterialSymbolsDarkMode className="text-xl"/> : <MaterialSymbolsSunny className="text-xl"/>}
    </Button>
  )
}