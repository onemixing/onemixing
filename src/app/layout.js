import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Onemixing - Mixing & Mastering",
  description: "Mixing & Mastering",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="px-4 lg:px-6 h-14 flex items-center bg-black text-white">
          <Link
            href="/"
            className="flex items-center justify-center"
            prefetch={false}
          >
            <Image
              src="/img/logos/logo.png"
              width={120}
              height={40}
              alt="onemixing"
            />
            {/*}
          <WavesIcon className="h-6 w-6" />
          <span className="sr-only">Acme Audio</span>{*/}
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link
              href="/#services"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Services
            </Link>
            <Link
              href="/#portfolio"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Portfolio
            </Link>
            <Link
              href="/#about"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
        </header>
        {children}
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Onemixing. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy
          </Link>
        </nav>
      </footer>
      </body>
    </html>
  );
}
