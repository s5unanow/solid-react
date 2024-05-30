import React from 'react';

// useUser.ts
interface User {
  id: string;
  name: string;
  age: number;
  userUrl: string;
}

export const useUser = (): User => {
  return {
    id: '1',
    name: 'John Doe',
    age: 30,
    userUrl: 'https://example.com/user.jpg',
  };
};

// UserInfo.tsx
interface User {
  id: string;
  name: string;
  age: number;
  userUrl: string;
}

interface UserInfoProps {
  user: User;
}

const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
    </div>
  );
};

// UserImage.tsx
interface User {
  id: string;
  name: string;
  age: number;
  userUrl: string;
}

interface UserImageProps {
  user: User;
}

const UserImage: React.FC<UserImageProps> = ({ user }) => {
  return <img src={user.userUrl} alt={user.name} />;
};

// UserProfile.tsx
const UserProfile: React.FC = () => {
  const user = useUser();

  return (
    <div>
      <UserInfo user={user} />
      <UserImage user={user} />
    </div>
  );
};

export default UserProfile;
