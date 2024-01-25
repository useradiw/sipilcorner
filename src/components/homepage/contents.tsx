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
                <Hero title="Loading..." />
                <Card title="Loading..." />
            </>
        )
    }

    if (isError) {
        return (
            <div>Error: {error.message}</div>
        )
    }

    console.log(data)

    return (
        <>
            {data? 
                <Hero imageSrc={data?.body[0].cover.external.url} title={data?.body[0].properties.Title.title[0].text.content} link={`blogs/${data?.body[0].id}`} />
            : <Hero />}
            {data? 
                data?.body.slice(1).map((item: any, i: number) => {
                return (
                    <Card key={i} title={item.properties.Title.title[0].text.content} imageSrc={item.cover.external.url} />
                )
                })
            : <Card />}
        </>
    )
};

export default Contents;