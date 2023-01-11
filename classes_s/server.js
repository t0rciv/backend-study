import express from "express";

import { User } from "./User.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const user = new User("Victor", "v@mail.com");
  // const user2 = new User("Luan", "l@mail.com");

  console.log(user);
  console.log(user.getFullName());

  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
