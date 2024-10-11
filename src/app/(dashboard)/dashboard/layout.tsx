import DashboardHeader from "@/sections/Dashboard/components/Header/Header";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Show me your style - Dashboard",
  description: "Unleash your style with AI-driven fashion creations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen w-full flex-col">
        <DashboardHeader/>
        {children}
    </div>
  );
}
