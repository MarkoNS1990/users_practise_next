import { buildUsersPath, extractUser } from ".";
import fs from "fs";

export default function handler(req, res) {
  const { userId } = req.query;

  if (req.method === "DELETE") {
    const filePath = buildUsersPath();
    const data = extractUser(filePath);

    const deletedUser = data.find((user) => user.id === parseInt(userId));

    const index = data.findIndex((user) => user.id === parseInt(userId));

    data.splice(index, 1);
    fs.writeFileSync(filePath, JSON.stringify(data));

    res.status(200).json(deletedUser);
  } else if (req.method === "PUT") {
    const filePath = buildUsersPath();
    const data = extractUser(filePath);
    const name = req.body.name;

    const updatedUser = data.find((user) => user.id === parseInt(userId));
    const index = data.findIndex((user) => user.id === parseInt(userId));

    data.splice(index, 1, { name: name, id: parseInt(userId) });
    fs.writeFileSync(filePath, JSON.stringify(data));

    res.status(200).json({ message: "Success" });
  } else {
    const filePath = buildUsersPath();
    const data = extractUser(filePath);
    const userData = data.find((user) => user.id === parseInt(userId));

    res.status(200).json({ user: userData });
  }
}
