import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as API from '../../api';

const POSTS_SLICE_NAME = 'posts';

// const axiosInstance = axios.create({
//     baseURL: 'https://jsonplaceholder.typicode.com',

// });

const initialState = {
    posts: [],
    isFetching: false,
    error: null,
};

export const getPostsThunk = createAsyncThunk(
    `${POSTS_SLICE_NAME}/getPosts`,
    async (payload, thunkAPI) => {
        try {
            const { data } = await API.getPosts();
            return data; // .fulfilled action.payload
          } catch (err) {
            return thunkAPI.rejectWithValue({ message: err.message }); // .rejected action.payload
          }
    }
);

const postsSlice = createSlice({
    initialState,
    name: POSTS_SLICE_NAME,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getPostsThunk.pending, (state) => {
            state.isFetching = true;
            state.error = null;
        });
        builder.addCase(getPostsThunk.fulfilled, (state, { payload }) => {
            state.isFetching = false;
            state.posts = payload;
    
        });
        builder.addCase(getPostsThunk.rejected, (state, { payload }) => {
            state.isFetching = false;
            state.error = payload;
        });
    }
});


const { reducer, actions } = postsSlice;

export default reducer