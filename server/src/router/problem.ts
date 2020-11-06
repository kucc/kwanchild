import express, { Request, Response } from "express";
import problemService from "../service/problem.service";

const ProblemRouter = express.Router();

ProblemRouter.post("/:problemId", async (req: Request, res: Response) => {
  const { problemId } = req.params;
  const { answer } = req.body;
  const isCorrect = await problemService.isCorrect(Number(problemId), answer);
});

export default ProblemRouter;
