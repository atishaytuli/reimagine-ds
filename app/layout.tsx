import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/layout/theme-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Designing Solutions",
  description: "Designing Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" type="image/png" />

        {/* SEO Meta Tags */}
        <title>Designing Solutions | Leading IT & Telecom Experts </title>
        <meta name="description" content="Boost your business with top-tier IT and Telecom solutions. Expert technology services to optimize efficiency, security, and growth. Get a free consultation today!" />
        <meta name="keywords" content="IT solutions, Telecom experts, Business technology, Cloud services, Cybersecurity, Digital transformation, Managed IT, Telecom solutions, Enterprise technology" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Designing Solutions" />
        <meta http-equiv="content-language" content="en" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Designing Solutions | Expert IT & Telecom Services for Business Growth" />
        <meta property="og:description" content="Looking for expert IT and Telecom solutions? Designing Solutions helps businesses with cutting-edge technology, security, and digital transformation." />
        <meta property="og:url" content="https://reimagine-ds.vercel.app/" />
        <meta property="og:image" content="https://reimagine-ds.vercel.app/ogimage.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Designing Solutions - IT & Telecom Experts" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Designing Solutions | IT & Telecom Experts" />
        <meta name="twitter:description" content="Discover the best IT and Telecom services to enhance your business. Get started with expert consulting & top-notch technology solutions." />
        <meta name="twitter:image" content="https://reimagine-ds.vercel.app/ogimage.png" />
        <meta name="twitter:image:alt" content="Designing Solutions - IT & Telecom Experts" />

        {/* Canonical Tag */}
        <link rel="canonical" href="https://reimagine-ds.vercel.app/" />
      </head>

      <body className={cn("min-h-screen bg-background", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
