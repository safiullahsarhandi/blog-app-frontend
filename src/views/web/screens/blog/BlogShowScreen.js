import CommentBox from "components/CommentBox";
import MessageBox from "components/MessageBox";
import { useState } from "react";
import routes from "routes/web";

/**
 * Method to create the blog show
 * screen JSX
 *
 * @return {JSX.Element}
 * @constructor
 */
const BlogShowScreen = ({ post, submit,formData,setFormData }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-lg-12 col-sm-12 mt-4">
                    <h2 className="card-title">{post?.title}</h2>
                    <p className="card-text mt-4">{post?.content}</p>
                    <div className="card mt-5 border-0">
                        <div className="card-body">
                            <div className="row">
                                {/* <div className="col-md-2"></div> */}
                                <div className="col-md-8 p-2 border">
                                    <MessageBox submit={(e)=> submit(e,formData)} 
                                    formData={formData}
                                    setFormData={setFormData}
                                    message="Add a Comment" 
                                    />
                                </div>
                                {/* <div className="col-md-2"></div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 mb-2">
                        {
                            <CommentBox 
                                submit={submit} 
                                parent={formData.parent} 
                                formData ={formData}
                                setData={(data)=> setFormData({...formData,...data})} 
                                comments={post?.comments} 
                            />    
                        }
                </div>
            </div>
        </div>
    )
}

//Exporting component
export default BlogShowScreen;