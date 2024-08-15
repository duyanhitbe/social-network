import PostItemAction from "./PostItemAction";
import PostItemBody from "./PostItemBody";
import PostItemHeader from "./PostItemHeader";
import PostItemWrapper from "./PostItemWrapper";

export default function PostItem() {
  return (
    <PostItemWrapper>
      <PostItemHeader />
      <PostItemBody />
      <PostItemAction />
    </PostItemWrapper>
  );
}
