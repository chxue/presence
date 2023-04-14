import React, { useEffect, useState } from "react";
import Image from "next/image";
import { generateUsers, User } from "@/util/data";

const Presence: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [visibleUsers, setVisibleUsers] = useState<User[]>([]);
  const [showAll, setShowAll] = useState(false);

  const handleClick = () => {
    setShowAll(!showAll);
  };

  const handleShowLess = () => {
    setShowAll(false);
  };

  useEffect(() => {
    fetch("/api/channel")
      .then((res) => res.json())
      .then((data: User[]) => setUsers(data))
      .catch((error: Error) => console.error(error));
  }, []);

  useEffect(() => {
    setVisibleUsers(users.slice(0, 5));
  }, [users]);

  return (
    <div className="flex flex-col gap-2 border rounded-lg p-4 w-1/3 min-w-fit">
      <div className="max-h-80 overflow-y-scroll">
        {(showAll ? users : visibleUsers).map((user) => (
          <div key={user.username} className="flex items-center gap-2">
            <div className="w-10 h-10 relative rounded-full overflow-hidden my-1">
              <Image src={user.imageUrl} alt={user.name} fill={true} />
            </div>
            <div>{user.name}</div>
          </div>
        ))}
      </div>

      <div
        className="flex items-center justify-center p-2 m-2 rounded-md bg-gray-200 hover:bg-gray-300 cursor-pointer"
        onClick={showAll ? handleShowLess : handleClick}
      >
        {showAll ? "Show less" : `+ ${users.length - 5} more`}
      </div>
    </div>
  );
};

export default Presence;
