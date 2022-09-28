import React from "react";
import "@fullcalendar/react/dist/vdom"; // vite
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import Topbar from "@/MyComponents/Topbar";
import { Link } from "@inertiajs/inertia-react";

export default function Index(props) {
    const user = props.user;

    return (
        <div>
            <Topbar user={props.auth.user} />
            <h1>Hello {user.name}-san!</h1>
            <h3> Here is the TIL Dashboard.</h3>
            <Link href="/til/mydashboard">Go to your dashboard</Link>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                locale="ja"
            />
        </div>
    );
}
