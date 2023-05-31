import express from "express";
import { createServer } from "http";
import io from "socket.io";

const app = express();
const server = createServer(app);
const ioServer = io.Server(server);

app.get("/", (req, res) => {
  return res.json("Hello world");
});

server.listen(process.env.PORT || 3000, () => {
  console.log("Server listening");
});
