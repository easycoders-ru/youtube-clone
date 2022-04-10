import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const app = express();
const logger = morgan("dev");
app.use(logger);
const PORT = 4000;

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/video", videoRouter);

const handleListen = () => {
  console.log(`🚀 Сервер успешно запущен по адресу http://localhost:${PORT}`);
};

app.listen(PORT, handleListen);
