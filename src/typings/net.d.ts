import { Socket } from "net";
declare module "net" {
  export interface Socket {
    // attributes
    _id: string;

    // functions
    joinRoom(room: string, socket_id: string): void;
    leaveRoom(room: string, socket_id: string): void;

    rooms: Map<string, string>;
  }
  export interface Server {
    sockets: Map<string, Socket>;
    rooms: Map<string, Set<string>>;
  }
}
