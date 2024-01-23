"use client"

import { getPosts } from "@/lib/notion-helper";
import { useQuery } from "@tanstack/react-query";
import Card from "@/components/display/card";
import Hero from "@/components/display/hero";

export default function Home() {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (isLoading) <div>Loading...</div>;
  
  if (isError) <div>Error: ${error.message}</div>;

  console.log(data);

  return (
    <>
      <Hero imageSrc={data?.body[0].cover.external.url} title={data?.body[0].properties.Title.title[0].text.content}/>
      {data? 
        data?.body.map((item: any, i: number) => {
          return (
              <Card key={i} title={item.properties.Title.title[0].text.content} imageSrc={item.cover.external.url}/>
          )
        })
      : null}
    </>
  )
}
