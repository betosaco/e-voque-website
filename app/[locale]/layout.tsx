import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export function generateMetadata(): Metadata {
  return {
    title: "E-Voque | Professional Interpretation Services",
    description: "Professional over-the-phone interpretation services in multiple languages",
  };
}

type LayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

// Avoid direct access to params by handling it safely
export default function RootLayout(props: LayoutProps) {
  // We don't directly reference params.locale in JSX to avoid Next.js error
  
  return (
    <html>
      <body className={inter.className}>
        <main className="min-h-screen">
          {props.children}
        </main>
      </body>
    </html>
  );
} 