import { Server, Socket } from "net";

const onTimeout = (server: Server, socket: Socket) => {
  if (server.sockets.has(socket._id)) server.sockets.delete(socket._id);
};

export default onTimeout;
