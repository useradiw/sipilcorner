"use client"

import { useQuery } from "@tanstack/react-query";
import { getPost } from "@/lib/notion-helper";
import html from "remark-html";
import remarkGfm from "remark-gfm";
import emoji from "remark-emoji";
import Markdown from "react-markdown";
import Image from "next/image";
import Tags from "@/components/tags";
import Backbtn from "../control/backbtn";
import Upbutton from "../control/topscroll";

interface pageProps {
    pageid: string,
}

const Content = ({ pageid }: pageProps) => {
    const { isLoading, isError, data, error } = useQuery({
        queryKey: ["posts", pageid],
        queryFn: getPost,
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

    const head = data.head;
    console.log(data)
    return (
        <>
            <section className="mb-8">
                <h1 className="text-4xl font-extrabold text-center my-5">{head.title}</h1>
                <section className="flex flex-col gap-1 mt-2 mb-5">
                    <h5 className="text-center font-semibold">{head.author}</h5>
                    <h5 className="text-center text-sm">{head.created}</h5>
                    <div className="flex flex-row gap-2 justify-center items-center text-sm">
                        {head.tags.map((item: string, i: number) => 
                            <Tags key={i} text={item} />
                        )}
                    </div>
                </section>
                <Backbtn />
                <div className="my-5">
                    <Image 
                        src={head.cover}
                        alt="Cover Image"
                        width={1000}
                        height={200}
                        style={{
                            aspectRatio: 16/9
                        }}
                        className="object-scale-down w-full"
                    />
                </div>
                <blockquote className="text-xl font-semibold my-5 px-8 border-x border-slate-900/20 dark:border-slate-100/20">{head.highlight}</blockquote>
                <div className="my-5 pt-5 text-lg prose dark:prose-invert dark:prose-headings:text-slate-100 dark:prose-p:text-slate-100 dark:prose-strong:text-slate-100 dark:prose-li:text-slate-100">
                    <Markdown remarkPlugins={[remarkGfm, html, emoji]}>{data.body}</Markdown>
                </div>
                <Backbtn />
                <Upbutton />
            </section>
        </>
    )
};

export default Content;