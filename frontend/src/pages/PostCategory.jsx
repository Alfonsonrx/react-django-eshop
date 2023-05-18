import React, { useState } from 'react';
import { postCategory } from '../actions/usePost';
import { useGetCategories } from '../hooks/useGet';

import '../styles/PostProduct.scss'

const PostProduct = () => {
	const [data, setData] = useState({
        name: ''
    });
    
    const onSubmit = (e) => {
        e.preventDefault();

        if (validateField(data.name)) {
            postCategory(data);
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
        setData({name: ''});
    };

    const onChange = (e) => {
        setData({ [e.target.name]: e.target.value });
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
                        <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" name='name' onChange={(e) => onChange(e)} value={data.name} />
                    </div>
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