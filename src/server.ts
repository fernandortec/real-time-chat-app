import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  return res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("a user connected");
  // console.log(io.sockets.sockets.size); -- Print length of current connections

  socket.on("chat message", (msg: string) => {
    console.log("message: ", msg);
    io.emit("chat message", msg);
  });

  io.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(process.env.PORT || 3000, () => {
  console.log("Server listening on port 3000");
});
