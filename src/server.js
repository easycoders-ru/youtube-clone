import express from "express";
import morgan from "morgan";

const app = express();
const logger = morgan("dev");
const PORT = 4000;

const handleHome = (req, res) => {
  return res.send("Здесь будет главная страница сайта");
};

const handleLogin = (req, res) => {
  return res.send("ЗДесь будет страница входа в аккаунт");
};

app.use(logger);

app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListen = () => {
  console.log(`🚀 Сервер успешно запущен по адресу http://localhost:${PORT}`);
};

app.listen(PORT, handleListen);
