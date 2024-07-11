import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Antar's Portfolio",
  description:
    "Explore Antar Mukhopadhyaya's portfolio, showcasing projects in web development, machine learning, and cyber security. Currently pursuing a BTech in Computer Science and Engineering (Data Science) at Future Institute of Engineering and Management, Sonarpur, Kolkata, Antar is a 3rd-year student passionate about technology and innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js" />
    </html>
  );
}
