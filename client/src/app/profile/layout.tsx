import CommonLayout from "@app/components/layouts/CommonLayout";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return <CommonLayout>{children}</CommonLayout>;
}
