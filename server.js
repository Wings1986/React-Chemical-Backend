import express from "express";
import userRoutes from "./routes/userRoutes.js";
import chemicalRoutes from './routes/chemicalRoutes.js'
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
app.use(cors());
dotenv.config();

app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://goldsilvermobile:vA56XRNA4ZZUrejG@cluster0.sqcp3fl.mongodb.net/?retryWrites=true&w=majority",
    { useUnifiedTopology: true, useNewUrlParser: true }
  )
  .then(() => console.log("mongodb connected!!!!"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  return res.send('working!!');
});
app.use("/", userRoutes);
app.use('/', chemicalRoutes)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is running on port ${port}!!!`));
