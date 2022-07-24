import axios from "axios";

export const storeComment = async (formData)=> {
    try {
        let {data} = await axios.post('/comments',formData);
        return data;
    } catch (error) {
        console.log(error);
        if(error.response){
            throw new Error(error.response?.data?.message);
        }
    }
};