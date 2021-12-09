import React, {useEffect, useState} from 'react';
import Post from "./Post";
import axios from "axios";

const Posts = () => {
    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState([])

    const getPosts = () =>{
        return axios.get("https://jsonplaceholder.typicode.com/photos")
    }

    useEffect(()=> {
        setLoading(true)
        getPosts()
            .then(
                (res) =>{
                    console.log(res)
                    setPosts(res.data.slice(0, 10))
                }
            ).catch((err) =>{
                console.log(err)
            })
            .finally(()=>
                setLoading(false)
            )
    }, [] )
    return (
        <div>
            {loading ?
                <div > loading </div>:
                posts.length >0?
                    posts.map((post, index) => <Post key = {index} post={post}/> ):
                    <div> Post Empty </div>
                }
        </div>
    );
};

export default Posts;