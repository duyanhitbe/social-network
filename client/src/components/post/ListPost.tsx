import { usePostContext } from "@app/context/PostContext";
import Loading from "../shared/Loading";
import PostItem from "./PostItem";

export default function ListPost() {
  const { posts, isLoadingListPost } = usePostContext();

  if (isLoadingListPost) return <Loading />;

  return (
    <>
      {posts?.data.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </>
  );
}
