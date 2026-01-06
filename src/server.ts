import express from "express";

import cors from "cors";
import helmet from "helmet";

import userRoutes from "./routes/user.js";
import productRoutes from "./routes/product.js";
import mediaRoutes from "./routes/media.js";

const app = express();

app.use(express.json());

app.use(
  cors({
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(helmet());

app.use("/user", userRoutes);
app.use("/product", productRoutes);
app.use("/media", mediaRoutes);

const port = Number(process.env.PORT) || 4000;

app.listen(port, "127.0.0.1", (err?: Error) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`Server running on http://127.0.0.1:${port}`);
});
