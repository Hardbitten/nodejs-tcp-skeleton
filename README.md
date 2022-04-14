# Nodejs Tcp Skeleton

### Usage

for add new event, You Should create new file in `src/handler/` directory, and edit `src/handler/index.ts`.

also you need to add `interface` for your event:

create INewEventName.ts in `src/interfaces/Events` folder.

#### INewEventName.ts

```typescript
interface INewEventName {
  key: string;
  value: string;
}
```

then create `NewEventName.ts`.

#### NewEventName.ts

```typescript
...
import INewEventName from "../interfaces/Events/INewEventName"
const NewEventName = (socket: Socket) => {

  const response = {
    event_name: "NewEventName_Response",
    data: { connection: true } as INewEventName,
  } as IResponse;

  socket.write(JSON.stringify(response));
};
export default NewEventName;

```

the `src/handler/index.ts` Should be like Below:

```typescript
...
import NewEventName from "./NewEventName"
export default [
  {
    event_name: "ping",
    action: (socket: Socket) => PingHandler(socket),
  },
  {
    event_name: "NewEventName",
    action: (socket: Socket) => NewEventName(socket),
  },
  // etc...
] as Array<IEvents>;
```

#

### .Env

Env File Should be like Below:

```typescript
APP_NAME = string;
PORT = number;
```

You can also add extra types for Env in `src/typings/env.d.ts`

made with ❤ by Mahdi
