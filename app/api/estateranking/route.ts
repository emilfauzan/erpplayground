import { estate } from '@/data/estate'
import type { NextApiRequest, NextApiResponse } from 'next'

// type ResponseData = {
//     id: number,
//     ranking: number,
//     estate: number,
//     rkhjanjang: number,
//     rkhkg: number,
//     realisasijanjang: number,
//     realisasikg: number,
//     varianjanjang: number,
//     variankg: number,
// }

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.status(200).json({ name: 'OK' })
}

// import { addPosts, getPosts } from "@/lib/data";
// import { NextResponse } from "next/server";

// // GET DATA
// export const GET = async (req: Request, res: Response) => {
//     try {
//         const posts = getPosts();
//         return NextResponse.json({ message: "OK get lol", posts }, { status: 200 })
//     } catch (err) {
//         return NextResponse.json(
//             { message: "Error to get lmao", err },
//             {
//                 status: 500,
//             }
//         )
//     }
// };

// // POST DATA
// export const POST = async (req: Request, res: Response) => {
//     const { title, desc } = await req.json()
//     try {
//         const posts = { title, desc, date: new Date(), id: Date.now().toString() };
//         addPosts(posts);
//         return NextResponse.json({ message: "OK posted lol", posts }, { status: 201 })
//     } catch (err) {
//         return NextResponse.json(
//             { message: "Error to post lmao", err },
//             {
//                 status: 500,
//             }
//         )
//     }
// };