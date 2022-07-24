import React, { useState } from 'react'
import MessageBox from './MessageBox';

export default function CommentBox({background, comments,setData,formData,submit }) {
    const [showReplies,setShowReplies] = useState(false);
    return (
        <>
        {
            comments?.map((comment,commentIndex)=> (
                <div key={commentIndex} className={`card mt-2 ${background}`}>
                    <div class="card-body">
                            <div className="badge badge-danger">A</div>
                            <div><strong>{comment?.userName}</strong></div>
                            <div>{comment.createdAt}</div>
                        <p class="card-text">{comment?.comment}</p>
                        <a href="javascript:void(0)" onClick={()=> {setShowReplies(!showReplies); setData({parent : comment._id})}} class="btn btn-link">{showReplies?'hide replies':'reply'}</a>
                        {
                            (showReplies)?
                            <>
                            <hr></hr>
                            <MessageBox submit={(e)=> submit(e,formData)} 
                                formData={formData}
                                setFormData={setData}
                                message="send Reply"
                                />
                            <CommentBox 
                            formData={formData}
                            background="bg-light" 
                            setData={(data)=> setData(data)} 
                            comments={comment.replies} />    
                            </>
                            :''
                        }
                    </div>
                </div>                
            ))
        }
        </>
    )
}
