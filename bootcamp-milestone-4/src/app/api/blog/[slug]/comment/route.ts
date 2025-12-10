import connectDB from "@/src/database/db";
import Blog from "@/src/database/blogSchema";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params;

    await connectDB();

    const body = await req.json();


    if (!body || !body.author || !body.comment) {
        return NextResponse.json(
            { error: "Invalid comment data" },
            { status: 400 }
        );
    }

	// push comment object to document
	Blog.update(...)
}