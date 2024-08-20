"use client";

import { RoomProvider } from "@app/context/RoomContext";
import RoomActionForm from "../form/RoomActionForm";
import ButtonRoomAction from "./ButtonRoomAction";
import ListRoom from "./ListRoom";
import ModalRoomAction from "./ModalRoomAction";

export default function RoomPage() {
  return (
    <RoomProvider>
      <ListRoom />
      <ButtonRoomAction />
      <ModalRoomAction>
        <RoomActionForm />
      </ModalRoomAction>
    </RoomProvider>
  );
}
