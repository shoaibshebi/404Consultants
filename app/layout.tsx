import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";

import "./styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Container from "./components/Container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <body
        className={`${inter.className} bg-rich-blacks-main h-full relative`}
      >
        <Container>
          <Navbar />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
