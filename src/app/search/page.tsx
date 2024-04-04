"use client"

import { useSearchParams } from "next/navigation"; //use this for prod instead of searchParams
import { Results } from "@/components/search";
import { Suspense } from "react";
import { useQuery } from "@tanstack/react-query";
import { search } from "@/lib/notion-helper";
import SearchIcon from "@/components/search/searchIcon";

export const dynamic = "force-dynamic";

const SearchPage = () => {
    const query = useSearchParams().get("q");

    const { isLoading, isError, data, error } = useQuery({
        queryKey: ["search", query],
        queryFn: search,
        enabled: !!query,
    })

    console.log("Query: ", query)
    console.log(data)

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
            {query !== "" ?
                <>
                    <div className="flex flex-row w-full justify-between">
                        <div>Results</div>
                        <SearchIcon status="Success" />
                    </div>
                    <Results data={data.body} />
                </>
            :
                null
            }
        </Suspense>
    )
};

export default SearchPage;