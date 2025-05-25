import React, { useState } from 'react';

function CommentsList() {
  const [comments, setComments] = useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" }
  ]);

  const handleDelete = (id) => {
    setComments(comments.filter(comment => comment.id !== id));
  };

  return (
    <div>
      <h2>Список комментариев</h2>
      <ul>
        {comments.map(comment => (
          <li key={comment.id} style={{ marginBottom: '8px' }}>
            {comment.text}
            <button 
              onClick={() => handleDelete(comment.id)} 
              style={{ marginLeft: '12px' }}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
      {comments.length === 0 && <p>Нет комментариев</p>}
    </div>
  );
}

export default CommentsList;
