import { addPosts, getPosts } from "@/lib/data";
import { NextResponse } from "next/server";

// GET DATA
export const GET = async (req: Request, res: Response) => {
    try {
        const posts = getPosts();
        return NextResponse.json({ message: "OK get lol", posts }, { status: 200 })
    } catch (err) {
        return NextResponse.json(
            { message: "Error to get lmao", err },
            {
                status: 500,
            }
        )
    }
};

// POST DATA
export const POST = async (req: Request, res: Response) => {
    const { title, desc } = await req.json()
    try {
        const posts = { title, desc, date: new Date(), id: Date.now().toString() };
        addPosts(posts);
        return NextResponse.json({ message: "OK posted lol", posts }, { status: 201 })
    } catch (err) {
        return NextResponse.json(
            { message: "Error to post lmao", err },
            {
                status: 500,
            }
        )
    }
};