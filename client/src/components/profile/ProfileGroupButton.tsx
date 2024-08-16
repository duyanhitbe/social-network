"use client";

import { useLogout } from "@app/hooks/useAuth";
import { Stack } from "@chakra-ui/react";
import { FaCog, FaLock, FaSignOutAlt, FaUser } from "react-icons/fa";
import ProfileButton from "./ProfileButton";

export default function ProfileGroupButton() {
  const { mutate } = useLogout();

  const onLogout = () => {
    mutate();
  };

  return (
    <Stack spacing="1rem" mt="2rem">
      <ProfileButton icon={FaUser} onClick={() => {}}>
        Account Information
      </ProfileButton>
      <ProfileButton icon={FaCog} onClick={() => {}}>
        Settings
      </ProfileButton>
      <ProfileButton icon={FaLock} onClick={() => {}}>
        Privacy & Security
      </ProfileButton>
      <ProfileButton icon={FaSignOutAlt} onClick={onLogout}>
        Log Out
      </ProfileButton>
    </Stack>
  );
}
