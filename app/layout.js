import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from 'sonner';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Rahul Rajput",
  description: "An extensive display of my full-stack development skills, experiences, and projects, demonstrating my proficiency and commitment to coding.",
  // light and dark mode favicon
  icons: {
    icon: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        url: '/logo-light.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        rel: 'icon',
        type: 'image/png',
        url: '/logo-dark.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />
          <div className="absolute inset-0 -z-10 h-[550px] w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:34px_34px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto -ml-14 md:-ml-[0] h-[310px] w-[310px] rounded-full bg-primary opacity-20 blur-[100px]"></div></div>
          {children}
          <Toaster position="top-right" />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
