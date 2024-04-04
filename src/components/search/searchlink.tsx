"use client"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import Switch from "@/components/control/switch";
import LightSearch from "@/assets/images/lightsearch.svg";
import DarkSearch from "@/assets/images/darksearch.svg";

const SearchLink = () => {
    const path = "/search";
    const [mounted, setMounted] = useState<boolean>(false);
    const { theme } = useTheme();
    const router = useRouter();

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const handleClick = () => {
        router.push(path)
    };

    return (
        <Switch icon1={LightSearch} icon2={DarkSearch} onClick={handleClick} state={theme as string} size={28}/>
    )
};

export default SearchLink;