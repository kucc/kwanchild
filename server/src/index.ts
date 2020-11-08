import express from "express";
import loaders from "./loader";

const app = express();
loaders(app);

app.listen(8000, () => {
  console.log(`💌 Listening on port : 8000`);
});

export default app;
