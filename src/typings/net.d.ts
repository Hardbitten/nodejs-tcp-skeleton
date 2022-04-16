import { Socket } from "net";
declare module "net" {
  export interface Socket {
    // attributes
    _id: string;
    rooms: Map<string, string>;

    /**
     * @param room string
     * @param socket_id string
     */
    joinRoom(room: string, socket_id: string): void;

    /**
     * @param room string
     * @param socket_id string
     */
    leaveRoom(room: string, socket_id: string): void;

    /**
     * broadcast data to Specific room.
     * @param room string
     * @param data Object { event_name: string, data: any }
     */
    broadcast(room: string, data: any): void;
  }
  export interface Server {
    sockets: Map<string, Socket>;
    rooms: Map<string, /* socket list */ Set<string>>;
  }
}
