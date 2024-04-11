import "./globals.css";
import Navbar from "./components/navbar";
import Caret from "./components/caret";
import { Providers } from "./providers";

export const metadata = {
  title: "Daniel's Website",
  description: "Daniel Liu's personal website and blog.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-b5 dark:bg-b0">
        <Providers>
          <Navbar></Navbar>
          <Caret></Caret>
          {children}
        </Providers>
      </body>
    </html>
  );
}
