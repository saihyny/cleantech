import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroller from "@/components/Lenis";
import { Suspense } from "react"; // Import Suspense

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Khetra Clean Tech",
  description: "We are providing the best service and products across India",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Wrap SmoothScroller in Suspense if it's asynchronous */}
        <Suspense fallback={<div>Loading scroller...</div>}>
          <SmoothScroller />
        </Suspense>

        {/* Wrap the main content in Suspense */}
        <Suspense fallback={<div>Loading content...</div>}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}

