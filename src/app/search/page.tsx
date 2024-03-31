"use client"

import { SearchBar } from "@/components/search";
import Backbtn from "@/components/control/backbtn";
import { Suspense } from "react";
import { useQuery } from "@tanstack/react-query";
import { search } from "@/lib/notion-helper";
import Card from "@/components/display/card";

interface Props {
    query: string;
}

const Results = ({ query }: Props) => {
    const { isLoading, isError, data, error } = useQuery({
        queryKey: ["search", query],
        queryFn: search,
    })

    if (isLoading) {
        return (
            <>
                <div className="w-full bg-slate-600 rounded-md min-h-[45svh] animate-pulse"></div>
            </>
        )
    }

    if (isError) {
        return (
            <div>Error: {error.message}</div>
        )
    }

    return (
        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 w-full my-4">
            {data.body.length >= 0 ? 
            data.body.map((item: any, i: number) => {
                return (
                    <Card key={i} title={item.properties.Title.title[0].text.content} imageSrc={item.cover.external.url} link={`blogs/${item.id}`}/>
                )
            })
            : <div>Try different keywords.</div>}
        </div>
    )
};

const Search = ({ 
    searchParams, 
}: { 
    searchParams?: { 
        q?: string; 
        p?: string;
}}) => {
    const query = searchParams?.q || "";
    const currentPage = Number(searchParams?.p) || 1;
    return (
        <div className="flex flex-col gap-4">
            <SearchBar />
            <Backbtn />
            <Suspense key={query + currentPage}>
                <Results query={query}/>
            </Suspense>
        </div>
    )
};

export default Search;