"use client"

import { useState, useEffect } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import Switch from "@/components/control/switch";
import LightSearch from "@/assets/images/lightsearch.svg";
import DarkSearch from "@/assets/images/darksearch.svg";

const path = process.env.PUBLIC_BASE ? process.env.PUBLIC_BASE + "/search" : "http://localhost:3000/search";

const SearchLink = () => {
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

const SearchBar = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const handleChange = (value: string) => {
        const params = new URLSearchParams(searchParams);
        if (value) {
            params.set("query", value);
        } else {
            params.delete("query");
        }
        replace(`${pathname}?${params.toString()}`)
    };
    return (
        <div className="w-[90%] mx-auto">
            <input className="peer block w-full rounded-3xl border border-slate-400 py-2 px-4 text-sm outline-2 bg-slate-500 placeholder:text-slate-50 focus:bg-slate-800" placeholder="Search..." onChange={(e) => {handleChange(e.target.value)}} />
        </div>
    )
};

export { SearchLink, SearchBar };