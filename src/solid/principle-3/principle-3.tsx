import React, { useState, useEffect } from 'react';

type User = {
  id: number;
  name: string;
  email: string;
  avatarUrl: string;
};

type Post = {
  id: number;
  title: string;
  content: string;
};

const UserProfile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [settings, setSettings] = useState<{ theme: string }>({ theme: 'light' });

  useEffect(() => {
    fetch('/api/user')
      .then(response => response.json())
      .then(data => setUser(data));

    fetch('/api/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSettings({ theme: event.target.value });
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>User Profile</h1>
      <div>
        <img src={user.avatarUrl} alt="User Avatar" />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
      <div>
        <h2>User Posts</h2>
        {posts.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
      <div>
        <h2>User Settings</h2>
        <label>
          Theme:
          <select value={settings.theme} onChange={handleThemeChange}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default UserProfile;
