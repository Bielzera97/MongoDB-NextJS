"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"


const AddPost = () =>{


    const [post, setPost] = useState("")
    const [user, setUser] = useState("")

    const router = useRouter()

    const handleSubmit = async (e : any) => {
        e.preventDefault()

        try{
            const res = await fetch(`http://localhost:3000/api/posts`, {
                method: "POST",
                headers: {
                    "Content-type": "applcation/json"
                },
                body: JSON.stringify({user, post})
            })
            if(res.ok){
                router.push('/')
            }else{
                throw new Error ("Falhou ao criar um Post")
            }
        }
        catch(e){
            console.log("Error", e)
        }
        

    }


    return(
        <>
        <h1>Postando</h1>
        <form onSubmit={handleSubmit}>

            <input type="text" className="input input-bordered w-full max-w-xs" value={post} onChange={(e) => setPost(e.target.value)}/>

            <input type="text" className="input input-bordered w-full max-w-xs" value={user} onChange={(e) => setUser(e.target.value)}/>

            <button className="btn btn-outline btn-accent">Postar</button>
        </form>
        </>
    )
}

export default AddPost