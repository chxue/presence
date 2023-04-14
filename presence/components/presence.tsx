import React, { useEffect, useState } from "react";
import { generateUsers, User } from "@/util/data";
import UserItem from "./user_item";
import useSWR from "swr";
import { RingLoader } from "react-spinners";
interface PresenceProps {
  channelId: string;
}

/** Displays a list of users who are present in a given channel. */
const Presence: React.FC<PresenceProps> = ({ channelId }) => {
  const {
    data: users,
    error,
    isLoading,
  } = useSWR<User[]>(
    `/api/channel/${channelId}`,
    async (url) => {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Failed to fetch channel data");
      }
      return await res.json();
    },
    // Refresh every second
    { refreshInterval: 1000 }
  );

  const [showAll, setShowAll] = useState(false);

  if (error) {
    return <div>Error loading users list</div>;
  }
  if (isLoading) {
    return <RingLoader size={100} loading={true} />;
  }
  const visibleUsers = users?.slice(0, 5) || [];
  const handleClick = () => {
    setShowAll(!showAll);
  };

  const handleShowLess = () => {
    setShowAll(false);
  };

  return (
    <div className="flex flex-col gap-2 border rounded-lg pl-4 pr-1 py-2 w-1/3 min-w-400">
      {users!.length == 0 ? (
        <div>No active users</div>
      ) : (
        <div className="max-h-80 overflow-y-scroll">
          {(showAll ? users! : visibleUsers).map((user) => (
            <UserItem key={user.username} user={user} />
          ))}
        </div>
      )}

      {users!.length > 5 && (
        <div
          className="flex items-center justify-center p-2 m-2 rounded-md bg-gray-200 hover:bg-gray-300 cursor-pointer"
          onClick={showAll ? handleShowLess : handleClick}
        >
          {showAll ? "Show less" : `+ ${users!.length - 5} more`}
        </div>
      )}
    </div>
  );
};

export default Presence;
