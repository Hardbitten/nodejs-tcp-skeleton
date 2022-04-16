import { Socket } from "net";
import { server } from "../";

// Initilize Sockets Map
server.sockets = new Map<string, Socket>();
server.rooms = new Map<string, Set<string>>();

Socket.prototype.rooms = new Map<string, string>();
