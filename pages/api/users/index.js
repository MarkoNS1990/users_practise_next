import { users } from "../../../data/users";
import fs from "fs";
import path from "path";

export function buildUsersPath() {
  return path.join(process.cwd(), "data", "users.json");
}

export function extractUser(filePath) {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
}

export default function handler(req, res) {
  if (req.method === "POST") {
    const name = req.body.name;
    const id = req.body.id;

    const newUser = {
      id: id,
      name: name,
    };
    const filePath = buildUsersPath();
    const data = extractUser(filePath);
    data.push(newUser);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "Success", user: newUser });
  } else {
    const filePath = buildUsersPath();
    const data = extractUser(filePath);
    res.status(200).json({ users: data });
  }
}
