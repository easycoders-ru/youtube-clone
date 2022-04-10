import express from "express";

const app = express();
const PORT = 4000;

const handleHome = (req, res) => {
  return res.send("Здесь будет главная страница сайта");
};

const loggerMiddleware = (req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}: ${req.requestDate}`);
  next();
};

const dateTimeMiddleware = (req, res, next) => {
  req.requestDate = new Date();
  next();
};

app.get("/", dateTimeMiddleware, loggerMiddleware, handleHome);

const handleListen = () => {
  console.log(`🚀 Сервер успешно запущен по адресу http://localhost:${PORT}`);
};

app.listen(PORT, handleListen);
