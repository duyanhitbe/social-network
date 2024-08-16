"use client";

import { PostProvider } from "@app/context/PostContext";
import CreateUpdatePostForm from "../form/CreateUpdatePostForm";
import CircleButtonCreatePost from "./CircleButtonCreatePost";
import ListPost from "./ListPost";
import ModalCreateUpdatePost from "./ModalCreateUpdatePost";

export default function PostPage() {
  return (
    <PostProvider>
      <ListPost />
      <ModalCreateUpdatePost>
        <CreateUpdatePostForm />
      </ModalCreateUpdatePost>
      <CircleButtonCreatePost />
    </PostProvider>
  );
}
