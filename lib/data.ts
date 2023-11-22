import { type } from "os";

type POST = {
    id: string;
    title: string;
    desc: string;
    date: Date;
};

let posts: POST[] = [];

// handlers
export const getPosts = () => posts;

export const addPosts = (post: POST) => {
    posts.push(post);
};

export const detelePost = (id: string) => {
    posts = posts.filter((post) => post.id !== id);
}

export const updatePost = (id: string, title: string, desc: string) => {
    const post = posts.find((post) => post.id === id);

    if (post) {
        post.title = title;
        post.desc = desc;
    } else {
        throw new Error("NO POST FOUND!");
    }
}

export const getById = (id: string) => {
    return posts.find((posts) => posts.id === id);
}