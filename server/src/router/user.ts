import express, { Request, Response } from "express";
import userService from "../service/user.service";

const UserRouter = express.Router();

UserRouter.post("/login", async (req: Request, res: Response) => {
  const { username, startTime } = req.body;
  try {
    const isUnique = await userService.isUniqueUser(username);

    if (!isUnique) {
      res.status(400).send({ result: "중복되는 유저네임" });
    }

    await userService.createUser(username, startTime);

    res.cookie("name", username);
    res.send({ result: "success" });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

export default UserRouter;
