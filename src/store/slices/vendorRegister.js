import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8000/api/v1/vendorReg";


const initialState = {
    userData : [],
    loading:true,
    error:""
}

const vendor = createSlice({
    name:"vendorReg",
    initialState,
    reducers:{
        getVendorReg:(state , action)=>{
            state.initialState = action.payload
        },
        getVendorError:(state, action)=>{
            state.error = action.payload;
        }
    }
});

const headers = {
    'Content-Type':'application/json',
}

export const vendorAPI = (data) => async(dispatch)=>{
    try{
        const response = await axios.post(API_URL, data, headers);
        const token = response.data.token;
        localStorage.setItem("token" , token);
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        dispatch(getVendorReg(response.data));
        console.log(response, "ddddd");
    }catch(err){
        dispatch(getVendorError(err.response ? err.response.data : err.message));
        console.log(err , 'error');
    }
}

export const {getVendorReg , getVendorError} = vendor.actions;
export {vendor};