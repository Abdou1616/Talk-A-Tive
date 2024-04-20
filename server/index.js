import express from "express";
import { connectdb } from "./config/db.js";
import useRoute from "./routes/useRoute.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

connectdb();
app.use("/api", useRoute);
app.listen(3000, () => console.log("connected to port 3000"));
