import React, { useState } from 'react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const posts = [
    { id: 1, title: 'React Basics' },
    { id: 2, title: 'Advanced React' },
    { id: 3, title: 'React and Hooks' },
  ];

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filterPosts = (posts, searchQuery = '') => {
    return posts.filter((post) => {
      if (post.title && typeof post.title === 'string') {
        return post.title.toLowerCase().includes(searchQuery.toLowerCase());
      }
      return false;
    });
  };

  const filteredPosts = filterPosts(posts, searchQuery);

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search posts..."
      />
      <ul>
        {filteredPosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

