import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export const getPosts = createAsyncThunk(
    'getPosts',
    async function(data, {rejectWithValue,dispatch}) {
        dispatch(preloaderOn())
        dispatch(errorOff())
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            if(response.status === 200) {
                const posts = await response.json()
                dispatch(postsInfo(posts))
                dispatch(preloaderOff())

            }
            else if(response.status === 404) {
                throw `${response.status}: Не правильный запрос`
            }

        }
        catch (e) {
            dispatch(errorOn(e))
            dispatch(preloaderOff())
        }
    }
)


const postsSlice = createSlice({
    name: 'postsSlice',
    initialState: {
        posts: [],
        preloader: false,
        error: ""
    },
    reducers: {
        postsInfo: (state, action) => {
            state.posts = action.payload
        },
        preloaderOn: (state) => {
            state.preloader = true
        },
        preloaderOff: (state) => {
            state.preloader = false
        },
        errorOn: (state, action) => {
            state.error = action.payload
        },
        errorOff: (state) => {
            state.error = ""
        }
    }
})


export const {postsInfo, preloaderOn, preloaderOff, errorOn, errorOff} = postsSlice.actions

export default postsSlice.reducer;