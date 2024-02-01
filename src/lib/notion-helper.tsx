export const getPosts = async () => {
    const res = await fetch("/notion");
    return await res.json();
};

export const getPost = async ({ queryKey }: any) => {
    const [ _, pageid ] = queryKey;
    const res = await fetch(`/notion/pages/${pageid}`);
    return await res.json();
};