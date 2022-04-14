import { Socket } from "net";
import IPing from "../interfaces/Events/IPing";

const PingHandler = (socket: Socket) => {
  console.log(`Socket id ${socket._id} Ping.`);

  const response = {
    event_name: "pong",
    data: { connection: true } as IPing,
  } as IResponse;

  socket.write(JSON.stringify(response));
};
export default PingHandler;
