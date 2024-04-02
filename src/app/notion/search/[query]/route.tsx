import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

const secret = process.env.NOTION_SECRET;

export async function GET( req: Request, { params }: { params: { query: string} } ) {
    const query = params.query;
    if (!secret || !query) return NextResponse.json({message: "Some Environment Variable are missing."}, {status: 500})
    try {
        const notion = new Client({auth: secret});
        const search = await notion.search({
            query: query,
            filter: {
                value: "page",
                property: "object"
            },
            sort: {
                direction: "ascending",
                timestamp: "last_edited_time"
            },
        });
        const data = search.results as unknown as searchData[];
        if (search.object === "list") {
            return NextResponse.json({ body: data }, {status: 200});
        } else {
            throw new Error
        }
    } catch (error) {
        return NextResponse.json({message: "Something went wrong.", error: error}, {status: 400})
    }
};