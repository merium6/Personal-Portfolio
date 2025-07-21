import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import ClientLayout from "@/components/client-layout";

// Font setup
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const poppins = Poppins({ 
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap"
});

export const metadata = {
  title: "Khadeeja Asif | Front-end Developer Portfolio",
  description:
    "Khadeeja Asif is a front-end developer specializing in React.js, Next.js, Tailwind CSS, and modern UI libraries. With hands-on experience building responsive, high-performance web applications, she crafts sleek, scalable user experiences.",
  keywords: [
    "frontend developer",
    "react developer",
    "next.js",
    "tailwind css",
    "mui",
    "shadcn",
    "portfolio",
    "web developer",
    "UI developer",
  ],
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`!scroll-smooth ${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} relative bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-gray-800 dark:text-gray-200 transition-colors duration-300`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}