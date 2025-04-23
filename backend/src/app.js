import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";
import productsRouter from "./routes/products.routes.js";
import { errorHandler } from "./middleware/errorHandler.middleware.js";

const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

app.use("/api/v1/products", productsRouter);

app.use(errorHandler);

export { app };
