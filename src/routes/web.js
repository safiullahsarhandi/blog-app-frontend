import BlogListController from "controllers/Web/Blog/BlogListController";
import BlogShowController from "controllers/Web/Blog/BlogShowController";

const routes = {
    blogs: {
        path: '/',
        screen: BlogListController
    },
    blog: {
        path: '/blog/:id',
        screen: BlogShowController
    },
    createBlog: {
        path: '/blog/create',
        screen: BlogShowController
    },
}

//Exporting routes object
export default routes;