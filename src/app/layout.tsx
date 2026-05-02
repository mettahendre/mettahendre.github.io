import type { Metadata, Viewport } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Metta Hendre | Data Engineer",
  description: "Portfolio of Metta Hendre — Databricks Certified Data Engineer specializing in Azure, ADF, ADB, PySpark, and Synapse Analytics.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body suppressHydrationWarning>
        <NavBar />
        <div className="page-wrap">
          {children}
        </div>
      </body>
    </html>
  );
}
