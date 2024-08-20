import express, { json } from "express";
import indexRouetr from "./routes";

const app = express();

app.use(json());
app.use("/status", (req, res) =>
  res.json({ environment: process.env.ENVIRONMENT })
);
app.use("/", indexRouetr);

export default app;
