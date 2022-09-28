import { React, useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";

const previewStyle = {
    display: "flex",
    justifyContent: "center",
    margin: "0 0 0 0",
    width: "100vw",
    height: "70vh",
};

const textareaStyle = {
    width: "600px",
    height: "600px",
};

export default function Create(props) {
    const [values, setValues] = useState({
        title: "",
        body: "",
        accessibility: 1,
    });

    console.log(props.accessibilities);

    const handleChange = (e) => {
        e.preventDefault();
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
        if (values.body != "") {
            Inertia.post("/til/mydashboard/create", values);
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
                        type="text"
                        id="title"
                        name="post[title]"
                        value={values.title}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <div style={previewStyle}>
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
                        />
                    </div>
                    <div>
                        <label>プレビュー</label>
                        <br />
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: props.body }} />
                </div>
                <div className="grid place-items-center">
                    <label>accessibility</label>
                    <select
                        id="accessibility"
                        name="post[accessibility"
                        value={values.accessibility}
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
