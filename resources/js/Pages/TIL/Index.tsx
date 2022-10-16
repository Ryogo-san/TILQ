import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import "@fullcalendar/react/dist/vdom"; // vite
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import Topbar from "@/MyComponents/Topbar";
import { Link } from "@inertiajs/inertia-react";
import * as THREE from "three";

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

    const mountRef = useRef(null);

    useEffect(() => {
        const w = 640;
        const h = 360;

        // レンダラーを起動
        const renderer = new THREE.WebGLRenderer();

        const elm = mountRef.current;

        elm?.appendChild(renderer.domElement);

        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(w, h);

        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(45, w / h, 1, 10000);
        camera.position.set(0, 0, +1000);
        const geometry = new THREE.SphereGeometry(300, 30, 30);

        const loader = new THREE.TextureLoader();

        const texture = loader.load("../storage/images/block.jpg");

        const material = new THREE.MeshStandardMaterial({
            map: texture,
        });

        const mesh = new THREE.Mesh(geometry, material);

        scene.add(mesh);

        const directionalLight = new THREE.DirectionalLight(0xffffff);
        directionalLight.position.set(1, 1, 1);

        scene.add(directionalLight);

        const tick = () => {
            mesh.rotation.y += 0.01;
            renderer.render(scene, camera);

            requestAnimationFrame(tick);
        };

        tick();

        return () => {
            elm?.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div>
            <Topbar user={props.auth.user} />
            <h1>Hello {user.name}-san!</h1>
            <h3> Here is the TIL Dashboard.</h3>
            <Link href="/til/mydashboard">Go to your dashboard</Link>
            <div ref={mountRef} class="m-auto" />
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
