import React from "react";

export default function Show(props) {
    const user = props.user;
    const posts = props.posts;

    return (
        <div>
            {posts.map((post) => {
                return (
                    <div>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                );
            })}
        </div>
    );
}
