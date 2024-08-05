import connectDB from "@/lib/mongodb";
import Post from "@/model/Post";
import { connect } from "http2";
import { NextResponse } from "next/server";

export const PUT = async (req : any , {params} : any) => {
    const {id} = params;
    const {newUser : user, newPost : post}  = await req.json()
    await connectDB();
    await Post.findByIdAndUpdate(id, {user, post});
    return NextResponse.json({message : "Post Editado"}, {status: 200})
}

export const GET = async (req : any , {params} : any) => {
    const {id} = params;
    await connectDB();
    const post = await Post.findOne({_id : id });
    return NextResponse.json({post}, {status: 200})
}