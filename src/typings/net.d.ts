import { Socket } from "net";
declare module "net" {
  export interface Socket {
    _id: string;
  }
  export interface Server {
    sockets: Map<string, Socket>;
  }
}
