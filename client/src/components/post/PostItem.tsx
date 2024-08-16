import PostItemAction from "./PostItemAction";
import PostItemBody from "./PostItemBody";
import PostItemHeader from "./PostItemHeader";
import PostItemWrapper from "./PostItemWrapper";

type Props = {
  post: Post;
};

export default function PostItem({ post }: Props) {
  return (
    <PostItemWrapper>
      <PostItemHeader post={post} />
      <PostItemBody post={post} />
      <PostItemAction post={post} />
    </PostItemWrapper>
  );
}
