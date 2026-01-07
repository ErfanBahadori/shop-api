import express from "express";

import cors from "cors";
import helmet from "helmet";

import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./docs/swagger.js";

const app = express();

app.use(express.json());

app.use(
  cors({
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(helmet());

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, {
    explorer: true,
  })
);

import productRoutes from "./routes/product.js";
import mediaRoutes from "./routes/media.js";
import userRoutes from "./routes/user.js";

app.use("/product", productRoutes);
app.use("/media", mediaRoutes);
app.use("/user", userRoutes);

const port = Number(process.env.PORT) || 4000;

app.listen(port, (err?: Error) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`Server running on http://localhost:${port}`);
});
