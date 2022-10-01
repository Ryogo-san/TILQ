import React from "react";
import styled from "styled-components";
import "@fullcalendar/react/dist/vdom"; // vite
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import Topbar from "@/MyComponents/Topbar";
import { Link } from "@inertiajs/inertia-react";

export default function Index(props) {
    const user = props.user;

    // object -> array
    const posts = Object.keys(props.posts).map(function (key) {
        return [key, props.posts[key]];
    });

    const changeDateFormat = (date) => {
        const dates = date.split("-");
        let str = "";
        console.log(dates);
        return str + dates[0] + "年" + dates[1] + "月" + dates[2] + "日";
    };

    console.log(posts);

    const Wrapper = styled.section`
        padding: 4em;
        width: 80vw;
        margin-right: auto;
        margin-left: auto;
    `;

    return (
        <div>
            <Topbar user={props.auth.user} />
            <h1>Hello {user.name}-san!</h1>
            <h3> Here is the TIL Dashboard.</h3>
            <Link href="/til/mydashboard">Go to your dashboard</Link>
            <Wrapper>
                <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    locale="ja"
                />
            </Wrapper>
            <h2>最近のアクション</h2>
            {posts.map((post) => {
                return (
                    <p>
                        {changeDateFormat(post[0])}：{post[1]}件の追加
                    </p>
                );
            })}
        </div>
    );
}
