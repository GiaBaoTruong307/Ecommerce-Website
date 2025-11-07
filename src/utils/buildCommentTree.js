export function buildCommentTree(comments) {
  const commentMap = {};
  const roots = [];

  // Step 1: Tạo map
  comments.forEach((comment) => {
    commentMap[comment.id] = {
      ...comment,
      replies: [],
    };
  });

  // Step 2: Build tree
  comments.forEach((comment) => {
    if (comment.id_comment === 0) {
      // Root comment
      roots.push(commentMap[comment.id]);
    } else {
      const parent = commentMap[comment.id_comment];

      if (parent) {
        if (parent.id_comment === 0) {
          // Parent là root → Add vào replies (Level 1)
          parent.replies.push(commentMap[comment.id]);
        } else {
          // Parent là reply → Tìm parent gốc (Level 1) và add vào đó
          const level1Parent = findLevel1Parent(comment.id_comment, commentMap);

          if (level1Parent) {
            // Add vào replies của Level 1 parent (tất cả ngang hàng ở Level 2)
            level1Parent.replies.push(commentMap[comment.id]);
          } else {
            // Fallback: add vào parent trực tiếp
            parent.replies.push(commentMap[comment.id]);
          }
        }
      } else {
        // Không tìm thấy parent → coi như root
        roots.push(commentMap[comment.id]);
      }
    }
  });

  // Step 3: Sort replies theo thời gian
  roots.forEach((root) => {
    if (root.replies.length > 0) {
      root.replies.sort(
        (a, b) => new Date(a.created_at) - new Date(b.created_at)
      );
    }
  });

  return roots;
}

/**
 * Tìm Level 1 parent (comment reply trực tiếp của root)
 */
function findLevel1Parent(commentId, commentMap) {
  let current = commentMap[commentId];

  // Lặp ngược lên đến khi tìm thấy comment có parent là root (id_comment = 0)
  while (current) {
    const parent = commentMap[current.id_comment];

    if (parent && parent.id_comment === 0) {
      // Current là Level 1 (parent trực tiếp của root)
      return current;
    }

    current = parent;
  }

  return null;
}
