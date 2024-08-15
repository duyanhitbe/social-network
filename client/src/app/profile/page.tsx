import ProfileGroupButton from "@app/components/profile/ProfileGroupButton";
import ProfileHeader from "@app/components/profile/ProfileHeader";
import userService from "@app/services/user.service";

export default async function Page() {
  const user = await userService.getMe();

  return (
    <>
      <ProfileHeader user={user} />
      <ProfileGroupButton />
    </>
  );
}
