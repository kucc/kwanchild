import express, { Request, Response } from "express";
import userService from "../service/user.service";

const UserRouter = express.Router();

UserRouter.patch("/start", async (req: Request, res: Response) => {
  const { name } = req.cookies;
  try {
    await userService.gameStart(name);
    res.send("시작!!");
  } catch (e) {
    console.log(e.message);
    res.status(400).send({ error: e.message });
  }
});

UserRouter.post("/login", async (req: Request, res: Response) => {
  const { username } = req.body;
  try {
    const isUnique = await userService.isUniqueUser(username);

    if (!isUnique) {
      res.status(400).send({ result: "중복되는 유저네임" });
      return;
    }

    await userService.createUser(username);

    res.cookie("name", username);
    res.send({ result: "success" });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

export default UserRouter;
