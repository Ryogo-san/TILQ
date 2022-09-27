import React from "react";

export default function Index(props) {
    const user = props.user;

    return (
        <div>
            <h1>Hello {user.name}-san!</h1>
            <h3> Here is the TIL Dashboard.</h3>
        </div>
    );
}
