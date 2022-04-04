import express from "express";

const app = express();
const PORT = 4000;

const handleListen = () => {
  console.log(`🚀 Сервер успешно запущен по адресу http://localhost:${PORT}`);
};

app.listen(PORT, handleListen);
