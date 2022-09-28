import { Link } from "@inertiajs/inertia-react";
import React from "react";

export default function Show(props) {
    const user = props.user;
    const posts = props.posts;

    return (
        <div>
            {posts.map((post) => {
                return (
                    <div>
                        <h1>
                            <Link href={"/til/mydashboard/" + post.id}>
                                {post.title}
                            </Link>
                        </h1>
                        <p>{post.id}</p>
                        <p>{post.body}</p>
                    </div>
                );
            })}
            <Link href="til/mydashboard/create">create</Link>
        </div>
    );
}
