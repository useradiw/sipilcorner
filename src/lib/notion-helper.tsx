export const getPosts = async () => {
    const res = await fetch("/notion");
    return await res.json();
};

// export const getPost = async ({pageid}: any) => {
//     const res = await fetch(`/notion/pages/${pageid}`);
//     return await res.json();
// };