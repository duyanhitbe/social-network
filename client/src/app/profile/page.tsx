import { getTokenAction } from "@app/actions/getToken.action";
import ProfileGroupButton from "@app/components/profile/ProfileGroupButton";
import ProfileHeader from "@app/components/profile/ProfileHeader";
import userService from "@app/services/user.service";
import { Box } from "@chakra-ui/react";

export default async function Page() {
  const token = getTokenAction();
  const user = await userService.getMe(token!);

  return (
    <Box maxWidth="500px" margin="0 auto">
      <ProfileHeader user={user} />
      <ProfileGroupButton />
    </Box>
  );
}
