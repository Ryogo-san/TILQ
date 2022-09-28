import { Link } from "@inertiajs/inertia-react";
import React from "react";

export default function ShowDetail(props) {
    const post = props.post;


    return (
        <div>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.body }} />
            <Link href={"/til/mydashboard"}>戻る</Link>
        </div>
    );
}
