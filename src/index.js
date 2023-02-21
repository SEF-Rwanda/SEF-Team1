import express from "express";
import HttpStatus from "http-status";
import dbConnection from "./config/config";
import userRoutes from "./routes/userRouter";

const app = express();
app.use(express.json());

dbConnection();

app.use("/api/v1/users", userRoutes);
app.use("/", (req, res) => {
  res.json({
    message: "Welcome to the Nest estate API",
    status: HttpStatus.OK,
  });
});

const PORT = 5000;

app.listen(PORT, console.log(`Server Started on Port ${PORT}`));
