import express from "express";
import morgan from "morgan";

const app = express();
const logger = morgan("dev");
app.use(logger);
const PORT = 4000;

const globalRouter = express.Router();

const handleHome = (req, res) => res.send("Главная страница");

globalRouter.get("/", handleHome);

const userRouter = express.Router();

const handleEditUser = (req, res) => res.send("Редактирование профиля");

userRouter.get("/edit", handleEditUser);

const videoRouter = express.Router();

const handleVideoWatch = (req, res) => res.send("Просмотр видео");

videoRouter.get("/watch", handleVideoWatch);

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/video", videoRouter);

const handleListen = () => {
  console.log(`🚀 Сервер успешно запущен по адресу http://localhost:${PORT}`);
};

app.listen(PORT, handleListen);
