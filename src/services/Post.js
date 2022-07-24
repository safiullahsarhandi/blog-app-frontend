import axios from "axios";

export const getPosts = async (params)=> {
    let {data} = await axios.get('/posts',{params});
    return data;
};

export const createPost = async (params)=> {
    try {
        let {data} = await axios.post('/posts',params);
        return data;
    } catch (error) {
        if(error.response){
            throw new Error(error.response?.data?.message);
        }
    }
};


export const getPost = async (id)=> {
    let {data} = await axios.get(`/posts/${id}`);
    return data;
};
