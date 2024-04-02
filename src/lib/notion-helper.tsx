export const getPosts = async () => {
    const res = await fetch("/notion", { cache: "no-store"});
    return await res.json();
};

export const getPost = async ({ queryKey }: any) => {
    const [ _, pageid ] = queryKey;
    const res = await fetch(`/notion/pages/${pageid}`, { cache: "no-store"});
    return await res.json();
};

export const search = async ({ queryKey }: any) => {
    const [ _, query ] = queryKey;
    const res = await fetch (`/notion/search/${query}`, { cache: "no-store"});
    return await res.json();
};