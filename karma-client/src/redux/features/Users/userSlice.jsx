import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: 'Arman Hossen',
    email: "arman@gmail.com"

}
export const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {

    }

})