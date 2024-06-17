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
      <body className="bg-b5 dark:bg-b0 bg dark:bgDark">
        <Providers>
          <Navbar></Navbar>
          <Caret></Caret>
          {children}
        </Providers>
        <script
          defer
          data-domain="dliu.is-a.dev"
          src="https://analytics.is-a.dev/js/script.js"
        ></script>
      </body>
    </html>
  );
}
