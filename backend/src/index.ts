import express from "express";
import cors from "cors";
import statesRouter from "./routes/states";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Seven Safe Path Backend is running!");
});

app.use("/api/states", statesRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});