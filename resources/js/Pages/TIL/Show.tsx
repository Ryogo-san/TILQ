import Topbar from "@/MyComponents/Topbar";
import { Link } from "@inertiajs/inertia-react";
import React from "react";

export default function Show(props) {
    const user = props.user;
    const posts = props.posts;
    console.log(posts);

    return (
        <div>
            <Topbar user={props.auth.user} />
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
            <div>
                <Link href="/til/mydashboard/create">create</Link>
            </div>
            <div>
                <Link href="/til">back</Link>
            </div>
        </div>
    );
}
