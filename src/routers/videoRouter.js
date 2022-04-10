import express from "express";

const videoRouter = express.Router();

const handleVideoWatch = (req, res) => res.send("Просмотр видео");
videoRouter.get("/watch", handleVideoWatch);

export default videoRouter;
