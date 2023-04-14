import { User } from "@/util/data";
import { useState } from "react";
import Image from "next/image";

interface Props {
  user: User;
}

export default function UserItem(props: Props) {
  const [showTooltip, setShowTooltip] = useState(false);
  const { user } = props;

  const handleMouseOver = () => {
    setShowTooltip(true);
  };

  const handleMouseOut = () => {
    setShowTooltip(false);
  };

  return (
    <div
      className="flex items-center gap-2 relative"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="w-10 h-10 relative rounded-full overflow-hidden my-1">
        <Image src={user.imageUrl} alt={user.name} fill={true} />
      </div>
      <div>{user.name}</div>
      {showTooltip && (
        <div className="bg-gray-700 text-white py-1 px-2 rounded-md text-xs">
          {user.username}
        </div>
      )}
    </div>
  );
}
