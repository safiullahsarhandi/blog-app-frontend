import { notification } from "helpers";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { storeComment } from "services/Comment";
import { getPost } from "services/Post";
import { setPost } from "store/actions";
import Screen from "views/web/screens/blog/BlogShowScreen";

/**
 * Controller to handle blog show screen
 * functionality
 *
 * @return {JSX.Element}
 * @constructor
 */
const HomeController = () => {
    let {id} = useParams();
    let {post} = useSelector(state => state);
    let dispatch = useDispatch();
    // const [post, setPost] = useState({});    
    const [formData, setFormData] = useState({});
    // const posts = {};
    const fetch = async (id)=> {
        let {detail : data} = await getPost(id);
        setFormData({});
        dispatch(setPost(data));
        // setPost(data);
    };

    const submit = async (e,data)=> {
        e.preventDefault();
        try {
            let {message} = await storeComment({...data,postId : id});
            notification(message);
            await fetch(id);
        } catch (error) {
                notification(error.message,'error');
        }

    };
    useEffect(()=>{
        fetch(id);
    },[id]);

    //Return JSX
    return <Screen formData={formData} setFormData={setFormData} submit={submit} post={post} />
}

//Exporting default component
export default HomeController;