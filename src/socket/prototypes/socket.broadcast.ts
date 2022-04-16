import { Socket } from "net";
import { server } from "../";

Socket.prototype.broadcast = function (room: string, data: any) {
  if (server.rooms.has(room)) {
    const users = server.rooms.get(room);
    if (users)
      for (const user of Array.from(users)) {
        const userSocket = server.sockets.get(user);
        if (userSocket) userSocket.write(JSON.stringify(data));
      }
  }
};
