import { Server, Socket } from "net";
import * as uuid from "uuid";

const onConnection = (server: Server, socket: Socket) => {
  const socket_id = uuid.v4();
  socket._id = socket_id;
  console.log(`socket id ${socket._id} connected.`);
  server.sockets.set(socket_id, socket);
};

export default onConnection;
