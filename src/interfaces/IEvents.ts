import { Socket } from "net";

interface IEvents {
  event_name: string;
  action(socket: Socket): Function;
}
export default IEvents;
