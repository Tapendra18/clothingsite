import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8000/api/v1/contact";

const initialState = {
    contactData: [],
    loading: true,
    error: ""
}

const contacts = createSlice({
    name: "contact",
    initialState,
    reducers: {
        getContactuser: (state, action) => {
            state.initialState = action.payload;
        },
        getuserContactError: (state, action) => {
            console.log(action, 'error action');
            state.error = action.payload;
        }
    }
});

const headers = {
    'Content-Type': 'application/json'
}

export const contactAPI = (data) => async (dispatch) => {
    try {
        const response = await axios.post(API_URL, data, headers);
        dispatch(getContactuser(response.data));
        console.log(response, 'contacccccctttt');
    } catch (err) {
        dispatch(getuserContactError(err.response ? err.response.data : err.message));
        console.log(err, 'errorrr');
    }
}

export const { getContactuser , getuserContactError} = contacts.actions;
export {contacts};