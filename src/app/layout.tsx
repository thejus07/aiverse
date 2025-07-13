import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AiVerse - Transform Your Business with Intelligent Automation",
  description: "Leading AI agency delivering end-to-end machine learning, computer vision, NLP, and data automation services. Get your free AI audit today.",
  keywords: "AI, machine learning, computer vision, NLP, automation, artificial intelligence, data science",
  authors: [{ name: "AiVerse" }],
  creator: "AiVerse",
  openGraph: {
    title: "AiVerse - Transform Your Business with Intelligent Automation",
    description: "Leading AI agency delivering end-to-end machine learning, computer vision, NLP, and data automation services.",
    url: "https://aiverse.solutions",
    siteName: "AiVerse",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AiVerse - AI Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AiVerse - Transform Your Business with Intelligent Automation",
    description: "Leading AI agency delivering end-to-end machine learning, computer vision, NLP, and data automation services.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${firaCode.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
