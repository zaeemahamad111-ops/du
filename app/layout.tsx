import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";

export const metadata: Metadata = {
  title: {
    template: "%s | DU-Astral Construction",
    default: "DU-Astral | Engineering Excellence",
  },
  description:
    "DU-Astral Construction — Leading EPC company delivering end-to-end engineering solutions across refineries, steel, power, and petrochemical industries.",
  keywords: ["EPC", "construction", "engineering", "industrial", "refinery", "steel plant", "power plant"],
  openGraph: {
    type: "website",
    title: "DU-Astral | Engineering Excellence",
    description: "Built on precision. Delivered with pride.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Space Grotesk — Display & Headings: premium, modern, architectural */}
        {/* Inter — Body: clean, modern, highly readable */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
        />
        {/* Material Symbols Outlined for UI Icons */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,0,0&display=block"
        />
      </head>
      <body className="bg-white text-[#111] antialiased overflow-x-hidden">
        <Loader />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
