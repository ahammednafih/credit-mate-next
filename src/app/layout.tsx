import "./globals.css";
import { ReactNode } from "react";

import type { Metadata } from "next";
import { Recursive } from "next/font/google";

const recursive = Recursive({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Credit Mate",
  description: "Manage your credits and debts",
};

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Props) => (
  <html lang="en">
    <body className={recursive.className}>{children}</body>
  </html>
);

export default RootLayout;
