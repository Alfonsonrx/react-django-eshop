import React, { useState, useRef } from 'react';
import { postProduct } from '../actions/usePost';
import { useGetCategories } from '../hooks/useGet';

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
        price: 0,
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
            <div className='newpost-content'>
                <div className="newpost-header">
                    <h3>Add New Post</h3>
                </div>
                <div className="newpost-body">
                    <div>
                        <label htmlFor="basic-url" className="form-label">Title</label>
                        <div className="input-group">
                            <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" name='title' onChange={(e) => onChange(e)} value={data.title} />
                        </div>
                    </div>
                    <div className="input-group">
                        <span className="input-group-text">Price</span>
                        <div className="input-group">
                            <input type="number" className="form-control" id="basic-url" aria-describedby="basic-addon3" name='price' onChange={(e) => onChange(e)} value={data.price} />
                        </div>
                    </div>
                    <div className="input-group">
                        <span className="input-group-text">Detail</span>
                        <textarea className="form-control" aria-label="With textarea" name='description' onChange={(e) => onChange(e)} value={data.description} />
                    </div>
                    <div>
                        <label htmlFor="categories">Choose a category:</label>
                        <select name="category" id="categories" onChange={e=>onChange(e)}>
                            <option value="null">Select category</option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <div className='inpFile'>
                            <button onClick={handleUploadClick}>Click to select</button>

                            <input 
                                accept="image/jpeg,image/png,image/gif"
                                type="file"
                                ref={inputRef}
                                onChange={(e)=>handleFileAdd(e)}
                                style={{ display: 'none' }}
                                multiple
                            />
                            {/* <input type="file" accept="image/jpeg,image/png,image/gif" onChange={(e)=>handleFileAdd(e)} multiple /> */}
                        </div>
                        <ul>
                            {files.map((file, i) => (
                            <li key={i}>
                                {file.name} - {file.type}
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='newpost-footer d-flex justify-content-center'>
                    <button type="button" className="btn btn-primary btn-send" onClick={e => onSubmit(e)}>
                        Upload
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PostProduct;