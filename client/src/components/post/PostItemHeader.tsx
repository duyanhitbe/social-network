import { usePostContext } from "@app/context/PostContext";
import {
  Avatar,
  Box,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { FaEllipsisH } from "react-icons/fa";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Link from "../shared/Link";

type Props = {
  post: Post;
};

export default function PostItemHeader({ post }: Props) {
  const { onOpen, setAction, setPost, onDelete } = usePostContext();

  const onEdit = () => {
    setAction("update");
    setPost(post);
    onOpen();
  };

  return (
    <Flex justifyContent="space-between" alignItems="center" mb="1rem">
      <Flex alignItems="center">
        <Avatar
          size="md"
          name={post.user?.name}
          src="https://bit.ly/broken-link"
          mr="1rem"
          cursor="pointer"
        />
        <Box>
          <Link href="#">
            <Text fontWeight="bold">{post.user?.name}</Text>
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
          <MenuItem icon={<FiEdit />} onClick={onEdit}>
            Edit Post
          </MenuItem>
          <MenuItem icon={<FiTrash2 />} onClick={() => onDelete(post.id)}>
            Delete Post
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}
