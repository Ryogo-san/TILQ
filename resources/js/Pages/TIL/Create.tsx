import { React, useEffect, useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import styled from "styled-components";

const textareaStyle = {
    display: "block",
    width: "600px",
    height: "600px",
};

const PreviewDiv = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
`;

export default function Create(props) {
    const [values, setValues] = useState({
        title: "",
        body: "",
        accessibility_id: 1,
    });

    const handleChange = (e) => {
        e.preventDefault();
        e.persist();
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
        if (values.body != "") {
            setTimeout(() => {
                Inertia.post("/til/mydashboard/create", values);
            }, 500);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post("/til/mydashboard/store", values);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="grid place-items-center">
                    <label>タイトル</label>
                    <input
                        id="title"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-10/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        name="post[title]"
                        value={values.title}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <PreviewDiv>
                    <div>
                        <div>
                            <label>本文</label>
                        </div>
                        <textarea
                            id="body"
                            name="post[body]"
                            value={values.body}
                            onChange={handleChange}
                            style={textareaStyle}
                            rows="4"
                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Your memo..."
                        />
                    </div>
                    <div>
                        <label>プレビュー</label>
                        <br />
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: props.body }} />
                </PreviewDiv>
                <div className="grid place-items-center">
                    <label>accessibility</label>
                    <select
                        id="accessibility_id"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        name="post[accessibility_id]"
                        value={values.accessibility_id}
                        onChange={handleChange}
                    >
                        {props.accessibilities.map((option) => (
                            <option value={option.id}>{option.type}</option>
                        ))}
                    </select>
                    <br />
                    <button type="submit">Store</button>
                </div>
            </form>
            <Link href="/til/mydashboard">戻る</Link>
        </div>
    );
}
