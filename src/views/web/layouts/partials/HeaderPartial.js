import { notification } from "helpers";
import { reverse } from "named-urls";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import routes from "routes/web";
import { createPost, getPosts } from "services/Post";
import {Modal} from 'bootstrap';
import { setPosts } from "store/actions";
import { useDispatch } from "react-redux";
/**
 * Method to create the header
 * screen JSX
 *
 * @return {JSX.Element}
 * @constructor
 */
const Header = () => {
    const [formData, setFormData] = useState({});
    const dispatch = useDispatch();
    const submit = async (e)=>{
        e.preventDefault();
        try {
            let {message} = await createPost({...formData});
            notification(message);
            var modalEl = document.querySelector('#exampleModal')
            var modal = Modal.getOrCreateInstance(modalEl) // Returns a Bootstrap modal instance
            modalEl.addEventListener('hide.bs.modal', function (event) {
                document.querySelectorAll('.modal-backdrop.show').forEach(el => el.remove());
            });
            modal.hide();
            fetch();
        } catch (error) {
            
            notification(error?.message,"error");
        }
    };
    const fetch = async (page = 1)=> {
        let {detail : data} = await getPosts({page});
        dispatch(setPosts(data));
    };
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand text-uppercase" to="/">Blog App</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="d-flex justify-content-end mb-2 mb-lg-0 me-auto navbar-end navbar-nav w-100">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={reverse(routes.blogs.path,)}>Blogs</Link>
                            </li>
                            <li className="nav-item">
                                <a data-bs-toggle="modal" data-bs-target="#exampleModal" href="javascript:void(0)" className="nav-link" aria-current="page">Create new post</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Create New Post</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                        <form onSubmit={(e) => submit(e)}>
                            <div className="form-group mt-2">
                                <label for="title">Title</label>
                                <input value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} id="title" placeholder="Title..." className="form-control" />
                            </div>
                            <div className="form-group mt-2">
                                <label for="content">Content</label>
                                <textarea value={formData.content} onChange={(e) => setFormData({ ...formData, content: e.target.value })} cols={10} rows="8" id="content" placeholder="Content..." className="form-control" />
                            </div>
                            <div className="form-group mt-2">
                                <button type="submit" className="btn btn-block w-100 btn-primary btn-blue">Save</button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
    // return <h1>Head</h1>
}

//Exporting component
export default Header;