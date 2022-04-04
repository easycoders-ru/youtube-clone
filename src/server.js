import express from "express";

const app = express();
const PORT = 4000;

const handleHome = () =>
  console.log("Кто-то запрашивает главную страницу сайта");

app.get("/", handleHome);

const handleSearch = () => console.log("Кто-то что-то ищет");

app.get("/search", handleSearch);

const handleListen = () => {
  console.log(`🚀 Сервер успешно запущен по адресу http://localhost:${PORT}`);
};

app.listen(PORT, handleListen);
