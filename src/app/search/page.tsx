"use client"

import { SearchBar } from "@/components/search";
import Backbtn from "@/components/control/backbtn";

const Search = () => {
    return (
        <div className="flex flex-col gap-4">
            <SearchBar />
            <Backbtn />
        </div>
    )
};

export default Search;