import { Socket } from "net";
declare module "net" {
  export interface Socket {
    // attributes
    _id: string;
    rooms: Map<string, string>;

    // functions
    joinRoom(room: string, socket_id: string): void;
    leaveRoom(room: string, socket_id: string): void;
  }
  export interface Server {
    sockets: Map<string, Socket>;
    rooms: Map<string, /* socket list */ Set<string>>;
  }
}
