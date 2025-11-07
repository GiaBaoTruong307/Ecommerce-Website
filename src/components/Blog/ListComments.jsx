import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CommentItem from "./CommentItem";
import { buildCommentTree } from "../../utils/buildCommentTree";

function ListComments({ refreshComments }) {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [replyingTo, setReplyingTo] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost/laravel8/public/api/blog/detail/${id}`)
      .then((res) => {
        const flatComments = res.data.data.comment;
        const commentTree = buildCommentTree(flatComments);
        setComments(commentTree);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, refreshComments]);

  const handleReplyClick = (commentId) => {
    setReplyingTo(commentId);
  };

  const handleCancelReply = () => {
    setReplyingTo(null);
  };

  const handleReplySuccess = () => {
    setReplyingTo(null);
  };

  // Đếm tổng tất cả comments (bao gồm cả replies)
  const countAllComments = (commentArray) => {
    let count = 0;

    commentArray.forEach((comment) => {
      count++; // Đếm comment hiện tại

      // Đệ quy đếm replies
      if (comment.replies && comment.replies.length > 0) {
        count += countAllComments(comment.replies);
      }
    });

    return count;
  };

  // Tính tổng số comments
  const totalComments = countAllComments(comments);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        {/* Hiển thị tổng số comments (bao gồm cả replies) */}
        {totalComments} RESPONSE{totalComments !== 1 ? "S" : ""}
      </h2>

      <ul className="space-y-6">
        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            level={0}
            replyingTo={replyingTo}
            onReplyClick={handleReplyClick}
            onCancelReply={handleCancelReply}
            onReplySuccess={handleReplySuccess}
          />
        ))}
      </ul>
    </div>
  );
}

export default ListComments;
