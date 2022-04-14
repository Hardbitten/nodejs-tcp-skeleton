import { Socket } from "net";

import IEvents from "../interfaces/IEvents";
import PingHandler from "./Ping.handler";

export default [
  {
    event_name: "ping",
    action: (socket: Socket) => PingHandler(socket),
  },
  // more events...
] as Array<IEvents>;
