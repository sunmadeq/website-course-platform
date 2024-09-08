import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { Be_Vietnam_Pro } from "next/font/google";
import "@/app/layout.css";

export const metadata: Metadata = {
  title: {
    default: "SkillBridge",
    template: "%s - SkillBridge",
  },
  description: "An online course platform.",
};

const font = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
