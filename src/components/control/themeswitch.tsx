"use client"

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Switch from "./switch";
import lightsun from "@/assets/images/lightsun.svg";
import darksun from "@/assets/images/darksun.svg";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const handleClick = () => {
    if (theme === "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  };

  return (
    <Switch icon1={lightsun} icon2={darksun} onClick={handleClick} state={theme as string} size={32}/>
  )
}

export default ThemeSwitch;