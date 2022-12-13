import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export const getOnePost = createAsyncThunk(
    'getOnePost',
    async function(data, {rejectWithValue,dispatch}) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/'+data)
            const post = await response.json()
            dispatch(getInfoPost(post))
        }
        catch (e) {
           console.log(e);
        }
    }
)


const onePostsSlice = createSlice({
    name: 'onePostsSlice',
    initialState: {
        post:{}
    },
    reducers: {
        getInfoPost:(state,action)=>{
            state.post = action.payload
        }
    }
})


export const {getInfoPost} = onePostsSlice.actions

export default onePostsSlice.reducer;