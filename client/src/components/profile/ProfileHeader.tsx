import { Avatar, Box, Heading, Text } from "@chakra-ui/react";

type Props = {
  user: User;
};

export default function ProfileHeader({ user }: Props) {
  return (
    <Box
      maxWidth="100%"
      margin="0 auto"
      padding="2rem"
      bg="white"
      boxShadow="lg"
      borderRadius="md"
      textAlign="center"
    >
      <Avatar size="xl" name={user.name} src={user.avatar} mb="1rem" />
      <Heading fontSize="2xl" mb="0.5rem">
        {user.name}
      </Heading>
      <Text color="gray.500" mb="2rem">
        {user.email}
      </Text>
    </Box>
  );
}
