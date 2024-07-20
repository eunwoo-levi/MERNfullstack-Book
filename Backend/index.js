import express, { response } from "express";
import cors from "cors";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksroute.js";

const app = express();

// Middleware for parsing request body
app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome To MERN Stack Tutorial");
});

// "books" 경로로 시작하는 모든 요청에 대해 booksRoute라는 라우터를 사용하겠다는 의미
// Use the books route  (book 관련 route로직은 따로 보관하여 구조개선 및 유지보수 용이 )
app.use("/books", booksRoute);

// Database connection and server start
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to databaase");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
