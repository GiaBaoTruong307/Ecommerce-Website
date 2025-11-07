import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ReplyForm({ parentCommentId, onReplySuccess, onCancel }) {
  const { id } = useParams();
  const [replyText, setReplyText] = useState("");

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!token) {
      alert("Vui lòng đăng nhập để reply.");
      return;
    }

    if (!replyText.trim()) {
      alert("Vui lòng nhập nội dung reply.");
      return;
    }

    let config = {
      headers: {
        Authorization: "Bearer " + token,
        Accept: "application/json",
      },
    };

    let formData = new FormData();
    formData.append("id_blog", id);
    formData.append("id_user", user.id);
    formData.append("id_comment", parentCommentId);
    formData.append("comment", replyText.trim());
    formData.append("image_user", user.avatar || "");
    formData.append("name_user", user.name || "");

    axios
      .post(
        `http://localhost/laravel8/public/api/blog/comment/${id}`,
        formData,
        config
      )
      .then((res) => {
        console.log(res.data);
        alert("Reply thành công!");
        setReplyText("");
        onReplySuccess();
      })
      .catch((err) => {
        console.log(err);
        alert("Có lỗi xảy ra. Vui lòng thử lại!");
      });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="mb-3">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Your Reply
        </label>
        <textarea
          rows={4}
          placeholder="Write your reply..."
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-vertical"
        />
      </div>

      <div className="flex space-x-2">
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
        >
          Post Reply
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default ReplyForm;
