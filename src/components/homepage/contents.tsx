"use client"

import { getPosts } from "@/lib/notion-helper";
import { useQuery } from "@tanstack/react-query";
import Card from "../display/card";
import Hero from "../display/hero";

const Contents = () => {
    const { isLoading, isError, data, error } = useQuery({
        queryKey: ["posts"],
        queryFn: getPosts,
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
        <>
            {data? 
                <Hero imageSrc={data?.body[0].cover.external.url} title={data?.body[0].properties.Title.title[0].text.content} link={`blogs/${data?.body[0].id}`} />
            : <Hero />}
            <div className="grid grid-cols-2 gap-4 w-full my-4">
                {data? 
                    data?.body.slice(1).map((item: any, i: number) => {
                    return (
                        <Card key={i} title={item.properties.Title.title[0].text.content} imageSrc={item.cover.external.url} />
                    )
                    })
                : <Card />}
            </div>
        </>
    )
};

export default Contents;