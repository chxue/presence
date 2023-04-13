import React from 'react';
import Image from 'next/image';

interface User {
  name: string;
  username: string;
  imageUrl: string;
}

const Presence: React.FC = () => {
  const users: User[] = [
    { name: 'Alice faldfjaskdj flkas d', username: 'alice123', imageUrl: 'https://picsum.photos/150/150?random=1' },
    { name: 'Bob', username: 'bob456', imageUrl: 'https://picsum.photos/150/150?random=2' },
    { name: 'Charlie', username: 'charlie789', imageUrl: 'https://picsum.photos/150/150?random=3' },
  ];

  return (
    <div className="flex flex-col gap-2 border rounded-lg p-4 w-1/3 min-w-fit">
      {users.map((user) => (
        <div key={user.username} className="flex items-center gap-2">
          <div className="w-10 h-10 relative rounded-full overflow-hidden">
            <Image src={user.imageUrl} alt={user.name} fill={true}/>
          </div>
          <div>{user.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Presence;
