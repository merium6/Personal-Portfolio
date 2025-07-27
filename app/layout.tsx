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
  title: "Maryam Ali | Software Engineer Portfolio",
  description:
    "Maryam Ali is a software engineer specializing in ASP.NET Core, C#, Entity Framework, and full-stack web development. With strong expertise in building scalable APIs, secure authentication systems, and clean, maintainable code, she delivers robust enterprise solutions.",
  keywords: [
    "software engineer",
    ".NET developer",
    "ASP.NET Core",
    "C#",
    "Entity Framework",
    "SQL Server",
    "REST APIs",
    "full-stack developer",
    "backend developer",
    "JWT authentication",
    "software development",
    "clean architecture",
    "web development",
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