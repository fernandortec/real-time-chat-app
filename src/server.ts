import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  return res.sendFile(__dirname + "/index.html");
});

io.on("connection", () => {
  console.log("a user connected");
  // console.log(io.sockets.sockets.size); -- Check current connections
});

io.off("connection", () => {
  console.log("user disconnected");
});

server.listen(process.env.PORT || 3000, () => {
  console.log("Server listening");
});
