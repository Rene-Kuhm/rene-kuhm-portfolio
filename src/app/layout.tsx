import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

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
  metadataBase: new URL('https://rene-kuhm.dev'),
  title: "René Kuhm - Full-Stack Developer & Enterprise Systems Architect",
  description: "Expert in modern frontend frameworks, enterprise backend architecture, Domain-Driven Design, CQRS, Event Sourcing, and automation systems. Creator of OpenCode Productivity Suite and advocate for Zero Defect Programming.",
  keywords: [
    "Full-Stack Developer",
    "Enterprise Systems",
    "React",
    "Next.js",
    "Vue.js", 
    "Angular",
    "Node.js",
    "Domain-Driven Design",
    "CQRS",
    "Event Sourcing", 
    "Microservices",
    "Zero Defect Programming",
    "TypeScript",
    "Kubernetes",
    "DevOps"
  ],
  authors: [{ name: "René Kuhm", url: "https://github.com/Rene-Kuhm" }],
  creator: "René Kuhm",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rene-kuhm.dev",
    siteName: "René Kuhm Portfolio",
    title: "René Kuhm - Full-Stack Developer & Enterprise Systems Architect",
    description: "Expert in modern frontend frameworks, enterprise backend systems, Domain-Driven Design, and development automation.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "René Kuhm - Backend Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "René Kuhm - Full-Stack Developer & Enterprise Systems Architect",
    description: "Expert in modern frontend frameworks, enterprise backend systems, Domain-Driven Design, and development automation.",
    creator: "@rene_kuhm",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
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
        className={`${inter.variable} ${firaCode.variable} font-sans antialiased min-h-screen bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
