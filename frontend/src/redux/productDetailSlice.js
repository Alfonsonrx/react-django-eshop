import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    detailShowed: false,
    product: {},
};

export const detailSlice = createSlice({
    name: 'productDetail',
    initialState,
    reducers: {
        openDetail: (state, action) => {
            state.detailShowed = !state.detailShowed;
            const product = action.payload;
            state.product = product;
        },
        closeAndClear: (state) => {
            state.detailShowed = false;
            state.product = {};
        }
    },
});

export const { openDetail, closeAndClear } = detailSlice.actions;
export default detailSlice.reducer;