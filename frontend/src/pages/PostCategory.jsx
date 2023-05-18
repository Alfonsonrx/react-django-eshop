import React, { useState, useRef } from 'react';
import { postProduct } from '../actions/usePost';
import { useGetCategories } from '../hooks/useGet';

import '../styles/PostProduct.scss'

const initialState = {
    title: '',
    price: 0,
    description: '',
    category: null,
    images: null
}

const PostProduct = () => {
    const inputRef = useRef(null);
	const categories = useGetCategories();
    const [fileList, setFileList] = useState(null);
    const [data, setData] = useState({
        title: '',
        price: 1,
        description: '',
        category: null,
        images: []
    });
    
    const files = fileList ? [...fileList] : [];
    
    const onSubmit = (e) => {
        e.preventDefault();

        if (validateField(data.title) || validateField(data.description)) {
            postProduct(data, files);
        }
        resetState();
    }

    const validateField = (field) => {
        if (field.length === 0) {
            return false;
        }
        return true;
    };
    
    const resetState = () => {
        setData({...initialState, "images": []});
        setFileList(null);
    };

    const handleUploadClick = () => {
        inputRef.current?.click();
    };
    const handleFileAdd = (e) => {
        const selectedFiles = e.target.files;
        const newImage = [...(fileList || []), ...selectedFiles];
        setFileList(newImage);
        e.target.value = null;
    };

    const onChange = (e) => {
        if (e.target.value === "null") {
            setData({ ...data, [e.target.name]: null });
        } else {
            setData({ ...data, [e.target.name]: e.target.value });
        }
    };

    
    return (
        <div className='NewProduct'>
            <div className='NewProduct-container'>
                <div className="NewProduct-header">
                    <h3>Add New Post</h3>
                </div>
                <div className="NewProduct-content">
                    <div className="input-group">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" name='title' onChange={(e) => onChange(e)} value={data.title} />
                        {/* <div className="input-field">
                        </div> */}
                    </div>
                    <div className="input-group">
                        <label htmlFor="price" className="form-label">Price</label>
                        <div className="input-field">
                            $<input type="number" className="form-control" id="basic-url" aria-describedby="basic-addon3" name='price' onChange={(e) => onChange(e)} value={data.price} />
                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="detail" className="form-label">Detail</label>
                        <textarea className="form-control" aria-label="With textarea" name='description' onChange={(e) => onChange(e)} value={data.description} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="category" className="form-label">Choose a category:</label>
                        <select className="form-control category-input" name="category" id="categories" onChange={e=>onChange(e)}>
                            <option value="null">Select category</option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className='input-group'>
                        <label htmlFor="images" className="form-label">Insert image/s:</label>
                        <button className='secondary-button' onClick={handleUploadClick}>Click to select</button>

                        <input 
                            accept="ima ge/jpeg,image/png,image/gif"
                            type="file"
                            ref={inputRef}
                            onChange={(e)=>handleFileAdd(e)}
                            style={{ display: 'none' }}
                            multiple
                        />
                    </div>
                    <ul>
                        {files.map((file, i) => (
                        <li key={i}>
                            {/* <img src={files} alt='Img' /> */}
                            {file.name} - {file.type}
                        </li>
                        ))}
                    </ul>
                </div>
                <div className='NewProduct-footer'>
                    <button type="button" className="btn primary-button" onClick={e => onSubmit(e)}>
                        Upload
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PostProduct;