"use client";

import { PostProvider } from "@app/context/PostContext";
import PostActionForm from "../form/PostActionForm";
import ButtonPostAction from "./ButtonPostAction";
import ListPost from "./ListPost";
import ModalPostAction from "./ModalPostAction";

export default function PostPage() {
  return (
    <PostProvider>
      <ListPost />
      <ModalPostAction>
        <PostActionForm />
      </ModalPostAction>
      <ButtonPostAction />
    </PostProvider>
  );
}
