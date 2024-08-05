'use client'
import { useEffect, useState } from "react"


interface Post{
    _id: string
    user: string,
    post: string
}



const Posts =  () => {

    const [posts, setPosts] = useState<Post[]>([])
    
    useEffect(() => {
        const fetchPost = async () => {
            const res = await fetch("http://localhost:3000/api/posts");
            const posts = (await res.json()) as Post[]
            setPosts(posts)
        }

        fetchPost()
    },[])

    console.log(posts)

    return(
        <>
           <div>
                {posts.map((post : any) => {
                    return(
                        <div key={post._id}>
                            <h1>{post.user}</h1>
                            <p >{post.post}</p>
                        </div>
                    )
                })}
           </div>
        </>
    )
}


export default Posts