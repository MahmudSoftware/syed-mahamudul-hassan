import Footer from "@/components/common/Footer/Footer";
import Header from "@/components/common/Header/Header";
import Provider from "@/utils/Provider";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const ovo = Ovo({
  subsets: ["latin"],
  variable: "--font-ovo",
  weight: "400",
  display: "swap",
});

// metadata
export const metadata = {
  title: "Syed Mahamudul Hassan | Full Stack Web Developer",
  description:
    "I'm Sk SSyed Mahamudul Hassan, a Bangladeshi Full Stack Web Developer (MERN Stack) skilled in Next.js, React, Node.js, and MongoDB. Passionate about building production-grade web applications.",
  keywords: [
    "Syed Mahamudul Hassan",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
  ],
  authors: [
    {
      name: "Syed Mahamudul Hassan",
      url: "https://syed-mahamudul-hassan.vercel.app",
    },
  ],
  openGraph: {
    title: "Syed Mahamudul Hassan | Full Stack Web Developer",
    description:
      "Full Stack Web Developer skilled in Next.js, React, Node.js, and MongoDB.",
    url: "https://syed-mahamudul-hassan.vercel.app",
    siteName: "Syed Mahamudul Hassan Portfolio",
    images: [
      {
        url: "https://syed-mahamudul-hassan.vercel.app/syed-mahamudul-hassan.png",
        width: 1200,
        height: 630,
        alt: "Syed Mahamudul Hassan",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syed Mahamudul Hassan | Full Stack Web Developer",
    description:
      "Full Stack Web Developer skilled in Next.js, React, Node.js, and MongoDB.",
    images: [
      "https://syed-mahamudul-hassan.vercel.app/syed-mahamudul-hassan.png",
    ],
  },

  verification: {
    google: "YH95OYrJ-0z6gJv-p1Foci57M8KsXqGUTuoxZo88Tvs",
  },
};

// themeColor
export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#009966" },
    { media: "(prefers-color-scheme: dark)", color: "#009966" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${ovo.variable} font-outfit`}>
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
