import { Socket } from "net";
import { server } from "../";

Socket.prototype.leaveRoom = function (room: string, socket_id: string) {
  if (server.rooms.has(room)) {
    const users = server.rooms.get(room);
    if (users?.has(socket_id)) users?.delete(socket_id);
    if (users) {
      server.rooms.set(room, users);
      this.rooms.delete(room);
    }
  }
};
