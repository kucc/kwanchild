import express, { Request, Response } from "express";

const UserRouter = express.Router();

UserRouter.post("/login", (req: Request, res: Response) => {
  const { username } = req.body;
});

export default UserRouter;
