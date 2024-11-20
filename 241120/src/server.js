import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const morganMiddleWare = morgan("dev");

// Global Router
const globalRouter = express.Router();
const handleHome = (req, res) => {
  return res.send("Home");
};
globalRouter.get("/", handleHome);


const userRouter = express.Router();
const handleEditUser = (req, res) => {
  return res.send("Edit User");
};
userRouter.get("/users", handleEditUser);


const videoRouter = express.Router();
const handleWatchVideo = (req, res) => {
  return res.send("Watch Video");
};
videoRouter.get("/video", handleWatchVideo);

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/video", videoRouter);

app.use(morganMiddleWare);

const handleListening = () => 
  console.log(`Server Listening on Port http://localhost:${PORT}⏰`);

app.listen(4000, handleListening);