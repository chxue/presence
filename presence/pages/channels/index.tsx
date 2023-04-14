import Presence from "@/components/presence";
import React, { useEffect } from "react";

const UsersPage: React.FC = () => {
  useEffect(() => {
    const existingCookie = document.cookie.match(/(^|;)\s*myUserName\s*=/);
    if (!existingCookie) {
      document.cookie =
        "myUserName=chenxiaoxue0; expires=Thu, 01 Jan 2030 00:00:00 UTC; path=/";
    }
  }, []);

  return (
    <div className="m-4">
      <Presence />
    </div>
  );
};

export default UsersPage;
