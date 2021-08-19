import { buildUsersPath, extractUser } from ".";
import fs from "fs";
export default function handler(req, res) {
  const { userId } = req.query;

  if (req.method === "DELETE") {
    const filePath = buildUsersPath();
    const data = extractUser(filePath);

    const deletedUser = data.find((user) => user.id === parseInt(userId));

    const index = data.findIndex((user) => user.id === parseInt(userId));
    console.log(data);
    data.splice(index, 1);
    fs.writeFileSync(filePath, JSON.stringify(data));

    res.status(200).json(deletedUser);
  }
}
