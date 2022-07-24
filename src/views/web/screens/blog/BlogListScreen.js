import Pagination from "components/Pagination";
import { reverse } from "named-urls";
import { Link } from "react-router-dom";
import routes from "routes/web";

/**
 * Method to create the blog list
 * screen JSX
 *
 * @return {JSX.Element}
 * @constructor
 */
const BlogListScreen = ({ posts,fetch }) => {
    const postExcerpt = (content) => {
        return content.substr(0, 20) + '...';
    };
    return (
        <div className="container ">
            <div className="row">
                {
                    posts?.data?.map((post, postIndex) => (
                        <div key={postIndex} className="col-md-12 col-lg-12 m-2">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{post?.title}</h5>
                                    <p className="card-text">{postExcerpt(post?.content)}</p>
                                    <Link to={reverse(routes.blog.path,{id : post._id})} className="card-link">Read More...</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="row">
                <div className="col-md-12 col-lg-12 col-sm-12">
                    <Pagination onPageChange={(page)=> fetch(page)} data={posts} />
                </div>
            </div>
        </div>
    )
}

BlogListScreen.defaultProps = {
    posts: {},
};

//Exporting component
export default BlogListScreen;