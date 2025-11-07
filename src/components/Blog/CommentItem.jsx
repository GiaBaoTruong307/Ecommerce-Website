import ReplyForm from "./ReplyForm";

function CommentItem({
  comment,
  level = 0,
  replyingTo,
  onReplyClick,
  onCancelReply,
  onReplySuccess,
  isLastReply = false,
  parentComment = null, // Comment cha
}) {
  const handleReplyClick = (e) => {
    e.preventDefault();
    onReplyClick(comment.id);
  };

  const getIndent = () => {
    if (level === 0) return 0;
    if (level === 1) return 48;
    return 96; // Level 2+
  };

  const indent = getIndent();
  const showLine = level > 0;

  // Border colors theo level
  const getBorderColor = () => {
    if (level === 0) return "border-orange-500";
    if (level === 1) return "border-blue-500";
    return "border-green-500"; // Level 2+
  };

  const borderColor = getBorderColor();

  return (
    <li
      style={{ marginLeft: `${indent}px` }}
      className={`mb-4 relative ${showLine ? "comment-with-line" : ""} ${
        isLastReply ? "last-reply" : ""
      }`}
    >
      <div className={`border-l-4 ${borderColor} pl-4 py-2`}>
        <div className="flex space-x-4">
          {/* Avatar */}
          <a href="#" className="flex-shrink-0 relative z-10">
            <img
              className="w-12 h-12 rounded-full object-cover border-2 border-white"
              src={`http://localhost/laravel8/public/upload/user/avatar/${comment.image_user}`}
              alt={comment.name_user}
              onError={(e) => {
                e.target.src =
                  "https://ui-avatars.com/api/?name=" +
                  encodeURIComponent(comment.name_user || "User");
              }}
            />
          </a>

          {/* Comment Content */}
          <div className="flex-1">
            {/* User info */}
            <ul className="flex items-center space-x-6 text-sm text-gray-500 mb-3">
              <li className="flex items-center space-x-2">
                <i className="fa fa-user text-orange-500"></i>
                <span className="font-semibold text-gray-700">
                  {comment.name_user}
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fa fa-clock-o text-orange-500"></i>
                <span>{new Date(comment.created_at).toLocaleTimeString()}</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fa fa-calendar text-orange-500"></i>
                <span>{new Date(comment.created_at).toLocaleDateString()}</span>
              </li>
            </ul>

            {/* "Replying to..." cho Level 1+ (tất cả replies) */}
            {level >= 1 && parentComment && (
              <div className="mb-2 text-sm flex items-center">
                <i className="fa fa-reply text-gray-400 mr-2 text-xs"></i>
                <span className="text-gray-500">Replying to </span>
                <a
                  href="#"
                  className="font-semibold text-blue-600 hover:underline ml-1"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  {parentComment.name_user}
                </a>
              </div>
            )}

            {/* Comment text */}
            <p className="text-gray-600 mb-4 leading-relaxed">
              {comment.comment}
            </p>

            {/* Reply button */}
            <button
              className="inline-flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition-colors text-sm"
              onClick={handleReplyClick}
            >
              <i className="fa fa-reply"></i>
              <span>Reply</span>
            </button>

            {/* Reply Form */}
            {replyingTo === comment.id && (
              <div className="mt-4 p-4 bg-gray-50 border border-gray-200 rounded">
                <p className="text-sm text-gray-600 mb-3 font-medium">
                  Replying to {comment.name_user}:
                </p>
                <ReplyForm
                  parentCommentId={comment.id}
                  onReplySuccess={onReplySuccess}
                  onCancel={onCancelReply}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* RECURSIVE: Render replies */}
      {comment.replies && comment.replies.length > 0 && (
        <ul className="mt-2 space-y-2">
          {comment.replies.map((reply, index) => (
            <CommentItem
              key={reply.id}
              comment={reply}
              level={level + 1}
              replyingTo={replyingTo}
              onReplyClick={onReplyClick}
              onCancelReply={onCancelReply}
              onReplySuccess={onReplySuccess}
              isLastReply={index === comment.replies.length - 1}
              parentComment={comment} // comment hiện tại làm parent
            />
          ))}
        </ul>
      )}
    </li>
  );
}

export default CommentItem;
