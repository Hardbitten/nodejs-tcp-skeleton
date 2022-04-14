import { Socket, Server } from "net";
import EventHandler from "../handler";

const onData = (server: Server, socket: Socket, buf: Buffer) => {
  const data = JSON.parse(buf.toString());
  const event_name = data.event;

  const event = EventHandler.find((item) => item.event_name == event_name);
  if (event) event.action(socket);
};
export default onData;
