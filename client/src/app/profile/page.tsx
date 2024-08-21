import { getTokenAction } from "@app/actions/getToken.action";
import ProfileGroupButton from "@app/components/profile/ProfileGroupButton";
import ProfileHeader from "@app/components/profile/ProfileHeader";
import userService from "@app/services/user.service";

export default async function Page() {
  const token = getTokenAction();
  const user = await userService.getMe(token!);

  return (
    <>
      <ProfileHeader user={user} />
      <ProfileGroupButton />
    </>
  );
}
