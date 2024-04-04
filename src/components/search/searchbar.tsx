"use client"

import { useRouter, useSearchParams, usePathname } from "next/navigation";

export const dynamic = "force-dynamic";

const SearchBar = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const handleChange = (value: string) => {
        const params = new URLSearchParams(searchParams);
        if (value) {
            params.set("q", value);
        } else {
            params.delete("q");
        }
        replace(`${pathname}?${params.toString()}`)
    };
    return (
        <div className="w-[90%] mx-auto rounded-3xl flex flex-row gap-2 py-2 px-4 bg-slate-500">
            <input 
                className="w-full text-sm outline-none bg-slate-500 placeholder:text-slate-100" 
                placeholder="Search titles..." 
                onChange={(e) => {
                    setTimeout(() => {
                        handleChange(e.target.value)
                    }
                    , 3000)}}
                defaultValue={searchParams.get("q")?.toString()}
            />
        </div>
    )
};

export default SearchBar;