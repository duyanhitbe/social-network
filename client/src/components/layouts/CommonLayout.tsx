import { MAX_WIDTH } from "@app/constants/style.constant";
import { Box } from "@chakra-ui/react";
import { headers } from "next/headers";
import { PropsWithChildren } from "react";
import BottomNav from "../nav/BottomNav";
import TopNav from "../nav/TopNav";

export default function CommonLayout({ children }: PropsWithChildren) {
  const heads = headers();
  const pathname = heads.get("x-pathname");
  const bgColor = "teal.500";
  const color = "white";
  const paddingY = "1rem";
  const zIndex = "10";
  const paddingX = "1.5rem";

  const tab = (() => {
    if (pathname === "/") return "home";
    if (pathname?.includes("/chat")) return "chat";
    if (pathname?.includes("/notification")) return "notification";
    if (pathname?.includes("/profile")) return "profile";
    return "home";
  })();

  return (
    <Box maxW={MAX_WIDTH} margin="0 auto" boxShadow="lg">
      <TopNav
        bgColor={bgColor}
        color={color}
        paddingY={paddingY}
        paddingX={paddingX}
        zIndex={zIndex}
        tab={tab}
      />
      <Box
        paddingTop="5.5rem"
        paddingBottom="6.5rem"
        paddingX={tab === "chat" || tab === "notification" ? 0 : paddingX}
        minHeight="100vh"
        bg="gray.50"
      >
        {children}
      </Box>
      <BottomNav
        bgColor={bgColor}
        color={color}
        paddingY={paddingY}
        paddingX={paddingX}
        zIndex={zIndex}
        tab={tab}
      />
    </Box>
  );
}
