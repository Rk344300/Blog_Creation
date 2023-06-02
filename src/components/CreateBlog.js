import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import { StoreLocalStorageData } from '../utils';
import '../styles/CreateBlog.css';

const CreateBlog = () => {
    // store data using states
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const errors = {};

        if (!title.trim()) {
            errors.title = 'Title is required.';
        }

        if (!description.trim()) {
            errors.description = 'Description is required.';
        }

        if (!content.trim()) {
            errors.content = 'Content is required.';
        }

        if (content.trim().length < 10) {
            errors.content = 'Content should be at least 10 characters long.';
        }

        setErrors(errors);

        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (validateForm()) {


            const blogDetails = { 'title': title, 'description': description, 'content': content }
            StoreLocalStorageData('blogDetails', blogDetails);
            // Reset the form fields
            setTitle('');
            setDescription('');
            setContent('');
            setErrors({});
            alert("blog created successfully");
        }
    };

    return (
        <div className="container">
            <h1 style={{ color: "seagreen" }}>Create a Blog</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">
                        Title<span className="required">*</span>:
                    </label>
                    <input
                        type="text"
                        id="title"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    {errors.title && <span className="error-message" style={{ color: "red" }}>{errors.title}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="description">
                        Description<span className="required">*</span>:
                    </label>
                    <input
                        type="text"
                        id="description"
                        className="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    {errors.description && <span className="error-message" style={{ color: "red" }}>{errors.description}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="content">
                        Content<span className="required">*</span>:
                    </label>
                    <ReactQuill
                        id="content"
                        value={content}
                        onChange={setContent}
                    />
                    {errors.content && <span className="error-message" style={{ color: "red" }}>{errors.content}</span>}
                </div>

                <button type="submit" className="btn btn-primary"  >  Submit
                </button>
            </form>
        </div>
    );
};

export default CreateBlog;
