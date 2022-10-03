import React, { useState } from "react";

import Input from "./Input";

const AdminForm = (props) => {

    const [formData, setFormData] = useState({
        title: "",
        date: "",
        type: "",
        body: "",
        img: []
    });

    const enterData = (e) => {
        const { value, name } = e.target;
        setFormData((prevValue) => {
            if (name === "title") {
                return {
                    title: value,
                    date: prevValue.date,
                    type: prevValue.type,
                    body: prevValue.body,
                    img: prevValue.img
                }
            } else if (name === "date") {
                return {
                    title: prevValue.title,
                    date: value,
                    type: prevValue.type,
                    body: prevValue.body,
                    img: prevValue.img,
                }
            } else if (name === "type") {
                return {
                    title: prevValue.title,
                    date: prevValue.date,
                    type: value,
                    body: prevValue.body,
                    img: prevValue.img,
                }
            } else if (name === "body") {
                return {
                    title: prevValue.title,
                    date: prevValue.date,
                    type: prevValue.type,
                    body: value,
                    img: prevValue.img,
                }
            }
        })
    };

    const submitForm = (e) => {
        e.preventDefault();
        const submit = async () => {
            const response = await fetch('/blogs', {
                "method": "POST",
                "body": JSON.stringify(formData),
                "headers": { "Content-Type": "application/json" }
            })
            const json = await response.json()
            if (response.ok) {
                console.log(json);
                clearForm();
                props.fetchPosts();
            }
        }
        submit();
    };

    const clearForm = () => {
        setFormData({
            title: "",
            date: "",
            type: "",
            body: "",
            img: []
        })
    }

    function handleOpenWidget(e) {
        e.preventDefault()
        var myWidget = window.cloudinary.createUploadWidget({
            cloudName: 'dsdekztdq',
            uploadPreset: 'blogynohs',
            folder: 'blog-website'
        }, (error, result) => {
            if (!error && result && result.event === "success") {
                setFormData((prevValue) => {
                    return {
                        title: prevValue.title,
                        date: prevValue.date,
                        type: prevValue.type,
                        body: prevValue.body,
                        img: [...prevValue.img, { url: result.info.secure_url, public_id: result.info.public_id }]
                    }
                })
            }
        })
        myWidget.open();
    }

    return (
        <form className="admin" onSubmit={submitForm}>
            <h2>Add A Post</h2>
            <label>Title</label>
            <Input name="title" onChange={enterData} formData={formData} />
            <div className="date-type">
                <div>
                    <label>Date</label>
                    <Input name="date" type="date" onChange={enterData} formData={formData} />
                </div>
                <div>
                    <label>Type</label>
                    <select onChange={enterData} name="type" className="input" value={formData.type}>
                        <option></option>
                        <option value="hike">Hike</option>
                        <option value="bike">Bike</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>
            <label>Body</label>
            <textarea onChange={enterData} name="body" className="input" value={formData.body}></textarea>
            <button id="upload_widget" className="img-btn input" onClick={handleOpenWidget}>Upload Images</button>
            <div className="img-preview">
                {formData.img.map((image) => (
                    <img src={image.url} />
                ))}
            </div>
            <button className="input" type="submit">Submit</button>
        </form>
    )
}

export default AdminForm;