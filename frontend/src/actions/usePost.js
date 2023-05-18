import axios from 'axios';

export const postProduct = async (data, files) => {
    const formData = new FormData();
    for (var key in data) {
        if (data[key] !== null) {
            formData.append(key, data[key]);
        }
    }
    formData.delete('images');
    
    files.forEach((file) => {
        formData.append('images', file);
    });
    for (var p of formData) {
        console.log(p);
    }
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/v1/product/`, formData);
        
        return response.data;
    } catch (err) {
        console.log(err);
    }
};

export const postCategory = async (data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    };
    const body = JSON.stringify(data);
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/v1/categories/`, body, config);

        return response.data;
    } catch (err) {
        console.log(err);
    }
};