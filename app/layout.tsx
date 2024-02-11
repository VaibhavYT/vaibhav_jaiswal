import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import "../styles/globals.css"
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Poppins, Open_Sans, Roboto_Slab } from "next/font/google"
import { ReactElement } from "react"
import Providers from "../providers/Providers"
const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["100", "200", "300", "500", "400", "600", "700", "800"],
  subsets: ["latin-ext"],
})
export const metadata: Metadata = {
  title: "Vaibhav Jaiswal",
  description: "Software Developer",
};

export default function RootLayout({ children }: { children: ReactElement }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="w-[90%] max-w-[1200px] mx-auto">
          {/* <Navbar /> */}
          {/* <Sidebar/> */}
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
