import React from 'react';
import { useDispatch } from 'react-redux';
import { getOnePost } from '../../store/onePostSlice';

function Post({post}) {
    const dispatch = useDispatch()
    const handleGet =()=>{
        dispatch(getOnePost(post.id))
    }
    return (
        <div>
            <h3>title: {post.title}</h3>
            <button onClick={handleGet}>get info</button>
            <h1>-------------------------</h1>
        </div>
    );
}

export default Post;