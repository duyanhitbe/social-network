import ChatPage from "@app/components/chat/ChatPage";

export default function Page({ params }: PageProps) {
  return <ChatPage roomId={params.id}/>;
}
