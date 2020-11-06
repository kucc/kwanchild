import express, { Request, Response } from "express";
import problemService from "../service/problem.service";
import userService from "../service/user.service";

const ProblemRouter = express.Router();

ProblemRouter.patch("/done", async (req: Request, res: Response) => {
  const { name } = req.cookies;
  try {
    await userService.gameEnd(name);
    res.send("ok");
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

ProblemRouter.post("/:problemId", async (req: Request, res: Response) => {
  const { problemId } = req.params;
  const { answer } = req.body;
  try {
    const isCorrect = await problemService.isCorrect(Number(problemId), answer);

    if (!isCorrect) {
      res.status(400).send({ result: "ㅋㅋ틀림" });
      return;
    }

    res.send({ result: "오 맞음ㅋ 좀 하는듯" });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

export default ProblemRouter;
