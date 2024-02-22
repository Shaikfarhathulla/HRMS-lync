import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
interface userData {
    name: string,
    age: number
}

type initialType = {
    isLoading: boolean,
    data: any[]
}
export const LoginUser = createAsyncThunk('loginUser', async () => {
    try {
        const userData: userData = await axios.get('http://localhost:3000/api/companies');
        return userData;
    } catch (error) {
        return error;
    }
});

var initialState: initialType = {
    isLoading: false,
    data: []
}



const loginSlice = createSlice({
    name: 'Login_slice',
    initialState,
    reducers: {

    },
    //     extraReducers: (builder) => {
    //         builder
    //             .addCase(get)
    //     }
})