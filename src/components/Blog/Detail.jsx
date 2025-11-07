import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Rate from "./Rate";
import ListComments from "./ListComments";
import Comment from "./Comment";

function Detail() {
  const { id } = useParams();
  const [detailBlog, setDetailBlog] = useState(null);
  const [refreshComments, setRefreshComments] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost/laravel8/public/api/blog/detail/${id}`)
      .then((res) => {
        setDetailBlog(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="w-full">
      {/* Blog Post Area */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Latest From our Blog
        </h2>

        {/* Single Blog Post */}
        {!detailBlog ? (
          <p>Loading...</p>
        ) : (
          <article className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {detailBlog.title}
            </h3>

            {/* Post Meta */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <ul className="flex items-center space-x-6 text-sm text-gray-500 mb-2 sm:mb-0">
                <li className="flex items-center space-x-2">
                  <i className="fa fa-user text-orange-500"></i>
                  <span>Author {detailBlog.id_auth}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fa fa-clock-o text-orange-500"></i>
                  <span>
                    {new Date(detailBlog.created_at).toLocaleTimeString()}
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fa fa-calendar text-orange-500"></i>
                  <span>
                    {new Date(detailBlog.updated_at).toLocaleDateString()}
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
              <a href="#" className="block">
                <img
                  src={`http://localhost/laravel8/public/upload/Blog/image/${detailBlog.image}`}
                  alt=""
                  className="w-full h-80 object-cover rounded-lg"
                />
              </a>
            </div>

            {/* Blog Content */}
            <div className="prose max-w-none text-gray-600 leading-relaxed mb-6">
              <p className="mb-4">{detailBlog.description}</p>
            </div>

            {/* Pager */}
            <div className="flex justify-end mb-8">
              <ul className="flex space-x-2">
                <li>
                  <a
                    href="#"
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-orange-500 hover:text-white transition-colors"
                  >
                    Pre
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-orange-500 hover:text-white transition-colors"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </article>
        )}
      </div>

      {/* Rate Component */}
      <Rate />

      {/* Comments Area */}
      <ListComments
        refreshComments={refreshComments}
        onReplyPosted={() => setRefreshComments(!refreshComments)}
      />

      {/* Reply Box */}
      <Comment onCommentPosted={() => setRefreshComments(!refreshComments)} />
    </div>
  );
}

export default Detail;
