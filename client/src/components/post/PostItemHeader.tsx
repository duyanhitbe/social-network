import {
  Avatar,
  Box,
  Flex,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FaEllipsisH } from "react-icons/fa";
import { FiEdit, FiTrash2 } from "react-icons/fi";

export default function PostItemHeader() {
  return (
    <Flex justifyContent="space-between" alignItems="center" mb="1rem">
      <Flex alignItems="center">
        <Avatar
          size="md"
          name="John Doe"
          src="https://bit.ly/broken-link"
          mr="1rem"
          cursor="pointer"
        />
        <Box>
          <Link href="#" as={NextLink}>
            <Text fontWeight="bold">John Doe</Text>
          </Link>
          <Text fontSize="sm" color="gray.500">
            2 hours ago
          </Text>
        </Box>
      </Flex>
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<FaEllipsisH />}
          variant="ghost"
          aria-label="Options"
        />
        <MenuList p={0}>
          <MenuItem icon={<FiEdit />}>Edit Post</MenuItem>
          <MenuItem icon={<FiTrash2 />}>Delete Post</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}
