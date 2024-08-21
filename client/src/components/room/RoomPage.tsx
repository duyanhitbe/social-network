"use client";

import { RoomProvider } from "@app/context/RoomContext";
import { SocketProvider } from "@app/context/SocketContext";
import RoomActionForm from "../form/RoomActionForm";
import ButtonRoomAction from "./ButtonRoomAction";
import ListRoom from "./ListRoom";
import ModalRoomAction from "./ModalRoomAction";

export default function RoomPage() {
  return (
    <SocketProvider>
      <RoomProvider>
        <ListRoom />
        <ButtonRoomAction />
        <ModalRoomAction>
          <RoomActionForm />
        </ModalRoomAction>
      </RoomProvider>
    </SocketProvider>
  );
}
