import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8000/api/v1/vendorlog";

const initialState = {
    userData : [],
    loading:true,
    error:""
}

const vendorLogin = createSlice({
    name :"vendorLogin",
    initialState,
    reducers:{
        vendorLoginSuccess:(state , action)=>{
            state.initialState = action.payload;
        },
        vendorloginError:(state , action)=>{
            state.error = action.payload;
        }
    }
});

const headers ={
    'Content-Type': 'application/json'
}

export const vendorLoginAPI = (data) => async(dispatch)=>{

    try{
        const response = await axios.post(API_URL, data, headers);
        const token = response.data.token;
        localStorage.setItem("token" , token);
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        dispatch(vendorLoginSuccess(response.data));
        console.log(response, "ddddd");
    }catch(err){
        dispatch(vendorloginError(err.response ? err.response.data : err.message));
        console.log(err , 'error');
    }
}

export const {vendorLoginSuccess , vendorloginError } = vendorLogin.actions;
export {vendorLogin};