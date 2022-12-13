import {configureStore} from "@reduxjs/toolkit";
import postsReducer from "./postsSlice";
import onePostReducer from "./onePostSlice";


export default configureStore({
    reducer: {
        postsReducer,
        onePostReducer
    }
})