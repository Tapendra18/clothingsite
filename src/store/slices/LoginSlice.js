import { createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = "http://localhost:8000/api/v1/login";
// let token = window.localStorage.setItem("loginUser", JSON.stringify(res.data));



const initialState = {
    userData:[],
    loading:true,
    error:""
}

const user = createSlice({
    name:"logins",
    initialState,
    reducers:{
        getuser:(state,action)=>{
            state.initialState = action.payload;
        },
        getUserLoginError:(state , action)=>{
            console.log(action, 'error action');
            state.error = action.payload;
        }
    }
});

// const token = "your_token"

const headers = {
    'Content-Type': 'application/json',
  }

export const getUserAsync = (data )=> async(dispatch)=>{
    try{
        const response = await axios.post(API_URL,data ,headers );
        const token = response.data.token;
        // Store the token in local storage or a cookie
        localStorage.setItem("token", token);
        localStorage.setItem("formValues", JSON.stringify(data));
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        dispatch(getuser(response.data));
        console.log(response , 'ddddddd');
    }catch(err) {
        dispatch(getUserLoginError(err.response ? err.response.data : err.message));
        console.log(err , 'errror');

    }
}

export const {getuser,getUserLoginError} = user.actions;

export { user };