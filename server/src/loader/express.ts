import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import UserRouter from "../router/user";
import createDBConnection from "./database";
import ProblemRouter from "../router/problem";
import cookieParser from "cookie-parser";
import RankRouter from "../router/rank";

export default async ({ app }: { app: express.Application }): Promise<void> => {
  await createDBConnection();

  app.use(cors());
  app.use(bodyParser.json());
  app.use(cookieParser());

  app.use("/rank", RankRouter);
  app.use("/user", UserRouter);
  app.use("/problem", ProblemRouter);

  app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    console.error(error);
    return res.status(400).json({ message: error });
  });
};
