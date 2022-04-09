import express from "express";

const app = express();
const PORT = 4000;

const handleHome = (req, res) => {
  return res.send("Здесь будет главная страница сайта");
};

const handleSearch = (req, res) => {
  return res.send("Здесь можно будет найти видео");
};

app.get("/", handleHome);
app.get("/search", handleSearch);

const handleListen = () => {
  console.log(`🚀 Сервер успешно запущен по адресу http://localhost:${PORT}`);
};

app.listen(PORT, handleListen);
