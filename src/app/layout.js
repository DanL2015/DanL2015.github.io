import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Caret from "./components/caret";

export const metadata = {
  title: "Daniel's Website",
  description: "Daniel Liu's personal website and blog.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-b0">
        <Navbar></Navbar>
        <Caret></Caret>
        {children}
      </body>
    </html>
  );
}
