import Presence from "@/components/presence";
import { useEffect, useState } from "react";

const UsersPage: React.FC = () => {
  const [selectedChannel, setSelectedChannel] = useState<string | null>(null);

  useEffect(() => {
    const existingCookie = document.cookie.match(/(^|;)\s*myUserName\s*=/);
    if (!existingCookie) {
      document.cookie =
        "myUserName=chenxiaoxue0; expires=Thu, 01 Jan 2030 00:00:00 UTC; path=/";
    }
  }, []);

  return (
    <div className="m-4">
      <div className="mb-2">
        <button
          className={`${
            selectedChannel === "static" ? "bg-blue-700" : "bg-blue-500"
          } text-white py-2 px-4 mr-2 rounded w-36`}
          onClick={() => setSelectedChannel("static")}
        >
          Static
        </button>
        <button
          className={`${
            selectedChannel === "dynamic" ? "bg-blue-700" : "bg-blue-500"
          } text-white py-2 px-4 mr-2 rounded w-36`}
          onClick={() => setSelectedChannel("dynamic")}
        >
          Dynamic
        </button>
        <button
          className="border py-2 px-4 rounded w-24"
          onClick={() => setSelectedChannel("")}
        >
          Exit
        </button>
      </div>
      {selectedChannel && <Presence channelId={selectedChannel} />}
    </div>
  );
};

export default UsersPage;
