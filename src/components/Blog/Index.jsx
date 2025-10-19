import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function BlogIndex() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/laravel8/public/api/blog")
      .then((res) => {
        setBlogs(res.data.blog.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-full">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Latest From our Blog
        </h2>

        {/* Blog Post 1 */}
        {blogs.map((blog) => {
          return (
            <article
              key={blog.id}
              className="mb-12 pb-8 border-b border-gray-200 last:border-b-0"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 hover:text-orange-500 transition-colors">
                {blog.title}
              </h3>

              {/* Post Meta */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                <ul className="flex items-center space-x-6 text-sm text-gray-500 mb-2 sm:mb-0">
                  <li className="flex items-center space-x-2">
                    <i className="fa fa-user text-orange-500"></i>
                    <span>Author {blog.id_auth}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="fa fa-clock-o text-orange-500"></i>
                    <span>
                      {new Date(blog.created_at).toLocaleTimeString()}
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="fa fa-calendar text-orange-500"></i>
                    <span>
                      {new Date(blog.created_at).toLocaleDateString()}
                    </span>
                  </li>
                </ul>

                {/* Rating Stars */}
                <div className="flex items-center space-x-1">
                  <i className="fa fa-star text-yellow-400"></i>
                  <i className="fa fa-star text-yellow-400"></i>
                  <i className="fa fa-star text-yellow-400"></i>
                  <i className="fa fa-star text-yellow-400"></i>
                  <i className="fa fa-star-half-o text-yellow-400"></i>
                </div>
              </div>

              {/* Blog Image */}
              <div className="mb-6">
                <Link to={`/blog/detail/${blog.id}`} className="block">
                  <img
                    src={`http://localhost/laravel8/public/upload/Blog/image/${blog.image}`}
                    alt="Girls Pink T Shirt"
                    className="w-full h-64 object-cover rounded-lg hover:opacity-90 transition-opacity"
                  />
                </Link>
              </div>

              {/* Blog Content */}
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                {blog.description}
              </p>

              {/* Read More Button */}
              <Link
                to={`/blog/detail/${blog.id}`}
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
              >
                Read More
              </Link>
            </article>
          );
        })}

        {/* Pagination */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <nav className="flex justify-center">
            <ul className="flex items-center space-x-2">
              <li>
                <Link
                  to="#"
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                >
                  1
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-colors"
                >
                  2
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-colors"
                >
                  3
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-colors"
                >
                  <i className="fa fa-angle-double-right"></i>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default BlogIndex;
