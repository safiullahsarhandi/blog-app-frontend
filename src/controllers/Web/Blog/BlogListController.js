import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "services/Post";
import { setPosts } from "store/actions";
import Screen from "views/web/screens/blog/BlogListScreen";

/**
 * Controller to handle blog list screen
 * functionality
 *
 * @return {JSX.Element}
 * @constructor
 */
const BlogListController = () => {
    let {posts} = useSelector((state)=> state);
    const dispatch = useDispatch();
    const fetch = async (page = 1)=> {
        let {detail : data} = await getPosts({page});
        dispatch(setPosts(data));
    };
    useEffect(()=>{
        fetch();
    },[]);
    //Return JSX
    return <Screen fetch={fetch} posts={posts} />
}

//Exporting default component
export default BlogListController;