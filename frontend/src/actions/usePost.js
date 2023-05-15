import { useEffect, useState } from "react";
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
        const response = await axios.post(`http://127.0.0.1:8000/api/v1/product/`, formData);
            
        console.log(response);
    } catch (err) {
        console.log(err);
    }
};