import React from 'react';
import "./post.css"

const Post = ({post}) => {
    return (
        <div className={"post"}>
            <img src={post.url} alt={"post"} className={"post_image"}/>
            <div className={"post_body"}>
                <h5> {`Title ${post.albumId}`} </h5>
                <p>{post.title}</p>
            </div>
        </div>
    );
};

export default Post;