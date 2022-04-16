import { Server, Socket } from "net";

const onClose = (server: Server, socket: Socket, hadError: boolean) => {
  if (server.sockets.has(socket._id)) {
    server.sockets.delete(socket._id);

    socket.rooms.clear();
  }
};

export default onClose;
