import Content from "@/components/homepage/content";

const blogPost = ({params}: {params: {slug: string}}) => {
    const pageid = params.slug;
    return (
        <>
            <Content pageid={pageid}/>
        </>
    )
};

export default blogPost;