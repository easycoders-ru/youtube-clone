import express from "express";

const globalRouter = express.Router();

const handleHome = (req, res) => res.send("Главная страница");
globalRouter.get("/", handleHome);

export default globalRouter;
