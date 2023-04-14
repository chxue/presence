// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { generateUsers, User } from "@/util/data";
import type { NextApiRequest, NextApiResponse } from "next";

const users = generateUsers(50);
users.unshift({
  name: "Chenxiao Xue",
  username: "chenxiaoxue0",
  imageUrl: "https://picsum.photos/150/150?random=0",
});

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[]>
) {
  const displayableUsers = users.filter(
    (user) => user.username != req.cookies["myUserName"]
  );
  const currentTimestampInSeconds: number = Math.floor(Date.now() / 1000);
  const iteration = currentTimestampInSeconds / 3;
  const index = iteration % displayableUsers.length;

  res.status(200).json(displayableUsers.splice(0, index));
}
