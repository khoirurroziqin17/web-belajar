"use client";

import "@/app/globals.css";
import { ThemeProvider } from "next-themes";

export default function Layout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
