import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productsRouter from "./routes/product.route.js";


dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json()); // allows to accept json data in req.body

app.use("/api/products", productsRouter)

app.listen(PORT, () => {
  connectDB();
  console.log("listening on port " + PORT);
});

//ubw2eHzOE7cirRxm

//mongodb+srv://shadowword9:<db_password>@cluster0.erjlv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
