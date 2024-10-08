import { Header } from "@/shared/components/shared";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import React from "react";

export const metadata: Metadata = {
  title: "Next Pizza",
  description: "Generated by create next app",
};

export default function HomeLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen">
      <Header></Header>
      {children}
      {modal}
      </main>
  );
}
