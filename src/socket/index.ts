import { createServer, Server, Socket } from "net";
import onClose from "./onClose";
import onConnection from "./onConnection";
import onData from "./onData";
import onEnd from "./onEnd";
import onError from "./onError";
import onTimeout from "./onTimeout";

export const server = createServer((socket) => {
  socket
    .on("data", (buf: Buffer) => onData(server, socket, buf))
    .on("close", (hadError: boolean) => onClose(server, socket, hadError))
    .on("timeout", () => onTimeout(server, socket))
    .on("error", (error: Error) => onError(server, socket, error))
    .on("end", () => onEnd(server, socket));
}).on("connection", (socket: Socket) => onConnection(server, socket)) as Server;

export const Initilize = () => {
  server.listen(Number(process.env.PORT), () => {
    console.log("opened server on", server.address());
  });
};

// override socket property override and initilize
import "./prototypes";
