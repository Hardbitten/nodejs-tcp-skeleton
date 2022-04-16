import { Socket } from "net";
import { server } from "../";

Socket.prototype.joinRoom = function (room: string, socket_id: string) {
  if (server.rooms.has(room)) {
    const users = server.rooms.get(room);
    if (!users?.has(socket_id)) users?.add(socket_id);
    if (users) {
      server.rooms.set(room, users);
      this.rooms.set(room, socket_id);
    }
  }
};
