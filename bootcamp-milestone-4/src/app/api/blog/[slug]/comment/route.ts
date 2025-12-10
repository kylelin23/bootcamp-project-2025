import connectDB from "@/src/database/db";
import Blog from "@/src/database/blogSchema";
import { NextRequest, NextResponse } from "next/server";
import { Noto_Sans_Old_Hungarian } from "next/font/google";


export async function POST(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params;

    const body = await req.json();
    const { user, comment } = body;

    if (!user || !comment || typeof user != "string" || typeof comment != "string"){
        return NextResponse.json(
            { error: "Invalid body of comment" },
            { status: 400 }
        );
    }

    await connectDB();

	const newComment = {
        user,
        comment,
        time: new Date(),
    };

    const updatedBlog = await Blog.findOneAndUpdate(
        { slug: slug },
        { $push: { comments: newComment } },
        { new: true } // return updated doc
    );

    if (!updatedBlog) {
        return NextResponse.json(
            { error: "Blog not found" },
            { status: 404 }
        );
    }
}