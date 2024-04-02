"use client"

import { Results } from "@/components/search";
import { Suspense } from "react";
import { useQuery } from "@tanstack/react-query";
import { search } from "@/lib/notion-helper";
import SearchIcon from "@/components/search/searchIcon";

interface Props {
    searchParams?: {
        q?: string,
        p?: string,
    },
};

const SearchPage = ({ searchParams }: Props) => {
    const query = searchParams?.q || "";
    const currentPage = Number(searchParams?.p) || 1;

    const { isLoading, isError, data, error } = useQuery({
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
        <Suspense key={query + currentPage}>
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