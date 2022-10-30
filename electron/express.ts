import express from "express";
import cors from "cors";

// Import your express routers here
import testRouter from "./api/test";

const app = express();

app.use(cors());
app.use(express.json());

// Add your express routers here
app.use("/api/test", testRouter);

const port = 3000;
export const server = app.listen(port, () => {
  console.log(`API is listening on port ${port}...`);
});
