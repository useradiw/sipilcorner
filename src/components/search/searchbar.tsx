"use client"

import { useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
// import SearchIcon from "./searchIcon";

// interface Props {
//     option: "Initial" | "Loading" | "Waiting" | "Success" | "Failed",
// };

const SearchBar = () => {
    // const [ status, setStatus ] = useState<typeof option>("Failed");
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const handleChange = (value: string) => {
        const params = new URLSearchParams(searchParams);
        if (value) {
            // setStatus("Waiting")
            setTimeout("3000")
            params.set("q", value);
        } else {
            // setStatus("Initial")
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
                    handleChange(e.target.value)}}
                defaultValue={searchParams.get("q")?.toString()}
            />
            {/* <div className="border border-transparent">
                <SearchIcon status={status}/>
            </div> */}
        </div>
    )
};

export default SearchBar;