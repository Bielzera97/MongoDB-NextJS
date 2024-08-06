'use client'
import { useEffect, useState } from "react"





const Posts =  () => {

    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        const fetchPost = async () => {
            const res = await fetch("http://localhost:3000/api/posts", {cache: 'no-store'});
            const posts = await res.json()  
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