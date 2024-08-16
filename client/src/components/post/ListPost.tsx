import { useGetAllPost } from "@app/hooks/usePost";
import Loading from "../shared/Loading";
import PostItem from "./PostItem";

export default function ListPost() {
  const { data, isLoading } = useGetAllPost();

  if (isLoading) return <Loading />;

  return (
    <>
      {data?.data.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </>
  );
}
