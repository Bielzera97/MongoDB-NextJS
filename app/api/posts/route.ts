import connectDB from "@/lib/mongodb"
import Post from "@/model/Post"
import { NextResponse } from "next/server"



export const POST = async (req : any) => {
    const {user, post}  = await req.json();
    await connectDB();
    await Post.create({
        user,
        post
    })
    return NextResponse.json({message : "Post Created"}, {status : 201})
}

export const GET = async () => {
    await connectDB();
    const posts = await Post.find();
    return NextResponse.json(posts)
}

export const DELETE = async (req : any) => {
    const id = req.nextUrl.searchParams.get("id");
    await connectDB();
    await Post.findByIdAndDelete(id);
    return NextResponse.json({message: "Post Deletado"}, {status: 200})
}