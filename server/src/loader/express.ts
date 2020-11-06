import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import UserRouter from "../router/user";
import createDBConnection from "./database";
import dotenv from "dotenv";

export default async ({ app }: { app: express.Application }): Promise<void> => {
  dotenv.config();
  await createDBConnection();

  app.use(cors());
  app.use(bodyParser.json());

  app.use("/user", UserRouter);

  app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    console.error(error);
    return res.status(400).json({ message: error });
  });
};
