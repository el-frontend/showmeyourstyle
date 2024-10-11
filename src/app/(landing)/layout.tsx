import Header from "@/sections/Landing/components/Header/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Show me your style",
  description: "Unleash your style with AI-driven fashion creations",
};

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {children}
    </div>
  );
}
