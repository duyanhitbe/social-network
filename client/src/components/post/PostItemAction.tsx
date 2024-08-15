import { Flex } from "@chakra-ui/react";
import { FiMessageCircle, FiShare, FiThumbsUp } from "react-icons/fi";
import PostItemActionIcon from "./PostItemActionIcon";

export default function PostItemAction() {
  return (
    <Flex justifyContent="space-between" alignItems="center" mt="1rem">
      <PostItemActionIcon icon={FiThumbsUp} title="Like" />
      <PostItemActionIcon icon={FiMessageCircle} title="Comment" />
      <PostItemActionIcon icon={FiShare} title="Share" />
    </Flex>
  );
}
