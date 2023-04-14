// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { generateUsers, User } from "@/util/data";
import type { NextApiRequest, NextApiResponse } from "next";
import { useRouter } from "next/router";
const usersDynamic = generateUsers(50);
usersDynamic.unshift({
  name: "Chenxiao Xue",
  username: "chenxiaoxue0",
  imageUrl: "https://picsum.photos/150/150?random=0",
});
const usersStatic = generateUsers(20);
usersStatic.unshift({
  name: "Chenxiao Xue",
  username: "chenxiaoxue0",
  imageUrl: "https://picsum.photos/150/150?random=0",
});
const delay = (ms: number): Promise<void> =>
  new Promise((res) => setTimeout(res, ms));

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[]>
) {
  const { id } = req.query;

  await delay(5000);
  const users = id == "dynamic" ? usersDynamic : usersStatic;
  const displayableUsers = users.filter(
    (user) => user.username != req.cookies["myUserName"]
  );
  if (id == "dynamic") {
    const currentTimestampInSeconds: number = Math.floor(Date.now() / 1000);
    const iteration = currentTimestampInSeconds / 3;
    const index = iteration % displayableUsers.length;

    res.status(200).json(displayableUsers.splice(0, index));
  } else {
    res.status(200).json(displayableUsers);
  }
}
