'use client'

import { Input, Button } from "@nextui-org/react"
import { MaterialSymbolsPersonRounded, MaterialSymbolsLockOpenRight, MaterialSymbolsLock } from "./svg"
import { useState } from "react";

export const LoginForm = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="py-5 flex flex-col w-full">
      <Input label="Usuario" className="w-full" variant="underlined" color="primary" endContent={
        <MaterialSymbolsPersonRounded className="text-xl text-primary-500"/>
      }/>
      <Input className="w-full" label="Contraseña" variant="underlined" color="primary" type={visible ? "default" : "password"} endContent={
        <button onClick={() => setVisible(!visible)}>
          {visible ? <MaterialSymbolsLockOpenRight className="text-lg text-primary-500"/> : <MaterialSymbolsLock className="text-lg text-primary-500"/>}
        </button>
      }/>
      <Button className="mt-10" color="primary">Iniciar sesión</Button>
    </div>
  )
}