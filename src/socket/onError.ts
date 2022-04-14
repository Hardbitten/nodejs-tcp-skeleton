import { Server, Socket } from "net";

const onError = (server: Server, socket: Socket, error: Error) => {
  if (server.sockets.has(socket._id)) server.sockets.delete(socket._id);
};

export default onError;
