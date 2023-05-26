import express from "express";
import { socket } from "./socket/chat.socket.js";

const app = express();

app.set("Port",4000);

const server = app.listen(app.get("Port"),()=>{
    console.log("servidor escuchando por el puerto", app.get("Port"));
});

socket(server);