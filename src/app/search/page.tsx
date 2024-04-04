"use client"

import { useSearchParams } from "next/navigation"; //use this for prod instead of searchParams
import { Results } from "@/components/search";
import { Suspense } from "react";
import { useQuery } from "@tanstack/react-query";
import { search } from "@/lib/notion-helper";
import SearchIcon from "@/components/search/searchIcon";

const GetResults = () => {
    const query = useSearchParams().get("q");
    return query
};

const SearchPage = () => {
    const query = GetResults();

    const { isLoading, isError, data } = useQuery({
        queryKey: ["search", query],
        queryFn: search,
        enabled: !!query,
    })

    if (isLoading) {
        return (
            <div className="flex flex-row w-full justify-between">
                <div>Loading</div>
                <SearchIcon status="Loading" />
            </div>
        )
    }

    if (isError || data?.body?.length === 0) {
        return (
            <div className="flex flex-row w-full justify-between">
                <div>Nothing Found</div>
                <SearchIcon status="Failed" />
            </div>
        )
    }

    return (
        <Suspense key={query}>
            {query !== "" && data !== undefined ?
                <>
                    <div className="flex flex-row w-full justify-between">
                        <div>Results</div>
                        <SearchIcon status="Success" />
                    </div>
                    <Results data={data?.body} />
                </>
            :
                null
            }
        </Suspense>
    )
};

export default SearchPage;