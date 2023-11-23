import { estate } from "@/data/estate";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
    NextResponse.json({estate}, { status: 201 })
};
