import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Detail() {
  const { id } = useParams();
  const [detailBlog, setDetailBlog] = useState(null);

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

      {/* Rating Area */}
      <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            <span className="text-gray-700 font-medium">Rate this item:</span>
            <div className="flex items-center space-x-1">
              <i className="fa fa-star text-orange-500"></i>
              <i className="fa fa-star text-orange-500"></i>
              <i className="fa fa-star text-orange-500"></i>
              <i className="fa fa-star text-gray-300"></i>
              <i className="fa fa-star text-gray-300"></i>
            </div>
            <span className="text-orange-500 text-sm">(6 votes)</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex items-center space-x-4">
          <span className="text-gray-700 font-medium">TAG:</span>
          <div className="flex items-center space-x-2">
            <a className="text-orange-500 hover:text-orange-600" href="#">
              Pink <span className="text-gray-400">/</span>
            </a>
            <a className="text-orange-500 hover:text-orange-600" href="#">
              T-Shirt <span className="text-gray-400">/</span>
            </a>
            <a className="text-orange-500 hover:text-orange-600" href="#">
              Girls
            </a>
          </div>
        </div>
      </div>

      {/* Comments Area */}
      <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">3 RESPONSES</h2>

        <ul className="space-y-6">
          {/* Comment 1 */}
          <li className="flex space-x-4">
            <a href="#" className="flex-shrink-0">
              <img
                className="w-12 h-12 rounded-full object-cover"
                src="images/blog/man-two.jpg"
                alt=""
              />
            </a>
            <div className="flex-1">
              <ul className="flex items-center space-x-6 text-sm text-gray-500 mb-3">
                <li className="flex items-center space-x-2">
                  <i className="fa fa-user text-orange-500"></i>
                  <span>Janis Gallagher</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fa fa-clock-o text-orange-500"></i>
                  <span>1:33 pm</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fa fa-calendar text-orange-500"></i>
                  <span>DEC 5, 2013</span>
                </li>
              </ul>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <a
                className="inline-flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition-colors"
                href="#"
              >
                <i className="fa fa-reply"></i>
                <span>Replay</span>
              </a>
            </div>
          </li>

          {/* Comment 2 */}
          <li className="flex space-x-4 ml-8">
            <a href="#" className="flex-shrink-0">
              <img
                className="w-12 h-12 rounded-full object-cover"
                src="images/blog/man-three.jpg"
                alt=""
              />
            </a>
            <div className="flex-1">
              <ul className="flex items-center space-x-6 text-sm text-gray-500 mb-3">
                <li className="flex items-center space-x-2">
                  <i className="fa fa-user text-orange-500"></i>
                  <span>Janis Gallagher</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fa fa-clock-o text-orange-500"></i>
                  <span>1:33 pm</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fa fa-calendar text-orange-500"></i>
                  <span>DEC 5, 2013</span>
                </li>
              </ul>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <a
                className="inline-flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition-colors"
                href="#"
              >
                <i className="fa fa-reply"></i>
                <span>Replay</span>
              </a>
            </div>
          </li>
        </ul>
      </div>

      {/* Reply Box */}
      <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
        <div className="w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Leave a replay
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Your Name <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                rows={11}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 resize-vertical"
                defaultValue=""
              />
            </div>
            <a
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              href="#"
            >
              Post Comment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
