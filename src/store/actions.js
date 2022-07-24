export const actions = {
        SET_POSTS : 'SET_POSTS',
        SET_POST : 'SET_POST',
};


export const setPosts = (data)=> {
    return {
        type : actions.SET_POSTS,
        payload : data,
    };
};

export const setPost = (data)=> {
    return {
        type : actions.SET_POST,
        payload : data,
    };
};