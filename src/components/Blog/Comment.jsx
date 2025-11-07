import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Comment({ onCommentPosted }) {
  const { id } = useParams();

  const token = localStorage.getItem("token") || "";
  const user = JSON.parse(localStorage.getItem("user")) || {};

  const [comment, setComment] = useState("");

  const handlePostComment = (e) => {
    e.preventDefault();

    // Validation
    if (!token) {
      alert("Vui lòng đăng nhập để bình luận.");
      return;
    }

    if (!comment) {
      alert("Vui lòng nhập bình luận.");
    } else {
      let config = {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
      };

      let formData = new FormData();
      formData.append("id_blog", id);
      formData.append("id_user", user.id);
      formData.append("id_comment", 0);
      formData.append("comment", comment);
      formData.append("image_user", user.avatar);
      formData.append("name_user", user.name);

      axios
        .post(
          `http://localhost/laravel8/public/api/blog/comment/${id}`,
          formData,
          config
        )
        .then((res) => {
          alert("Bình luận thành công!");
          onCommentPosted();
          setComment("");
          console.log(res.data);
        })
        .catch((err) => {
          alert("Đã có lỗi xảy ra. Vui lòng thử lại.");
          console.log(err);
        });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
      <div className="w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Leave a Comment
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Your Comment <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              rows={11}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 resize-vertical"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <a
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            href="#"
            onClick={handlePostComment}
          >
            Post Comment
          </a>
        </div>
      </div>
    </div>
  );
}

export default Comment;
