import React from 'react';
import Message from './Message';

import CommentsList from './CommentsList';

function App() {
  return (
    <div>
      <h1>Привет, React!</h1>
      <Message text="Это мой первый компонент на React!" />
      <CommentsList />
    </div>
  );
}

export default App;