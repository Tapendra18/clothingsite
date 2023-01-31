import { createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = "/api/v1/user/login";

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



export const getUserAsync = (data)=> async(dispatch)=>{
    try{
        const response = await axios.post(API_URL,data);
        console.log(response , 'ddddddd');
        dispatch(getuser(response.data));
    }catch(err) {
        console.log(err , 'errror');
        dispatch(getUserLoginError(err.response ? err.response.data : err.message))
    }
}

export const {getuser,getUserLoginError} = user.actions;

export { user };