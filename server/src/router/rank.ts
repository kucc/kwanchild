import express, { Request, Response } from "express";
import userService from "../service/user.service";

const RankRouter = express.Router();

RankRouter.get("/", async (req: Request, res: Response) => {
  try {
    const top10 = await userService.getRanking(10);
    res.json(top10);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

export default RankRouter;
