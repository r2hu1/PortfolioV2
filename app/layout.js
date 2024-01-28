import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
          <Header/>
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
