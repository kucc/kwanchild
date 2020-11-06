import express from "express";
import expressLoader from "./express";
import dotenv from "dotenv";

export default (expressApp: express.Application): void => {
  dotenv.config();

  expressLoader({ app: expressApp });

  console.log("✌️ Express loaded");
};
