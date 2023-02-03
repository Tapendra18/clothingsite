import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = "http://localhost:8000/user/login";

const initialState = {
    userData:[],
    loading:true,
    error:""
}

const register = createSlice({
    name:"register",
    initialState,
    reducers:{
        registerUser:(state,action)=>{
            state.initialState = action.payload;
        },
        getUserRegisterError:(state , action)=>{
            console.log(action , 'error action');
            state.error  = action.payload
        }
    }
});

const headers = {
    'Content-Type': 'application/json'
  }

export const getRegister = (data) => async(dispatch)=>{
    try{
        const response = await axios.post(API_URL, data ,headers);
        console.log(response , "ddddd");
        dispatch(registerUser(response.data));
    }catch(err) {
        console.log(err , 'error');
        dispatch(getUserRegisterError(err.response ? err.response.data : err.message))
    }
}

export const {registerUser , getUserRegisterError} = register.actions
// export {getRegister};
