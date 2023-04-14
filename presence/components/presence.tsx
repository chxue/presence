import React, { useEffect, useState } from "react";
import { generateUsers, User } from "@/util/data";
import UserItem from "./user_item";

const Presence: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [visibleUsers, setVisibleUsers] = useState<User[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    setShowAll(!showAll);
  };

  const handleShowLess = () => {
    setShowAll(false);
  };

  const handleMouseOver = () => {
    setShowTooltip(true);
  };

  const handleMouseOut = () => {
    setShowTooltip(false);
  };

  useEffect(() => {
    fetch("/api/channel")
      .then((res) => res.json())
      .then((data: User[]) => {
        setVisibleUsers(data.slice(0, 5));
        setUsers(data);
      })
      .catch((error: Error) => console.error(error));
  }, []);

  return (
    <div className="flex flex-col gap-2 border rounded-lg pl-4 pr-1 py-2 w-1/3 min-w-400">
      <div className="max-h-80 overflow-y-scroll">
        {(showAll ? users : visibleUsers).map((user) => (
          <UserItem key={user.username} user={user} />
        ))}
      </div>

      {users.length > 5 && (
        <div
          className="flex items-center justify-center p-2 m-2 rounded-md bg-gray-200 hover:bg-gray-300 cursor-pointer"
          onClick={showAll ? handleShowLess : handleClick}
        >
          {showAll ? "Show less" : `+ ${users.length - 5} more`}
        </div>
      )}
    </div>
  );
};

export default Presence;
