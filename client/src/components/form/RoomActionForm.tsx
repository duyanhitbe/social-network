import { useRoomContext } from "@app/context/RoomContext";
import { useGetAllRoom } from "@app/hooks/useRoom";
import { useGetAllUser, useGetMe } from "@app/hooks/useUser";
import { Button, ModalBody, ModalFooter, Stack } from "@chakra-ui/react";
import { Form } from "formik";
import { useMemo } from "react";
import Select from "../shared/Select";

export default function RoomActionForm() {
  const { onClose, isPending } = useRoomContext();
  const { data: userData } = useGetAllUser();
  const { data: user } = useGetMe();
  const { data: roomData } = useGetAllRoom();

  const members = useMemo(() => {
    const result: string[] = [];
    roomData?.data.map((room) =>
      result.push(...room.members.map((mem) => mem.userId))
    );
    return result;
  }, [roomData?.data]);

  const users = useMemo(() => {
    return userData?.data.filter(
      (item) => item.id !== user?.id && !members.includes(item.id)
    );
  }, [userData?.data, user?.id, members]);

  return (
    <Form>
      <ModalBody>
        <Stack spacing={4}>
          <Select
            id="userId"
            label="User"
            name="userId"
            placeholder="Select user"
            isRequired
          >
            {users?.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </Select>
        </Stack>
      </ModalBody>
      <ModalFooter>
        <Button mr={3} onClick={onClose}>
          Close
        </Button>
        <Button
          bg="teal.500"
          color="white"
          isLoading={isPending}
          _hover={{ bg: "teal.600" }}
          type="submit"
        >
          Create
        </Button>
      </ModalFooter>
    </Form>
  );
}
