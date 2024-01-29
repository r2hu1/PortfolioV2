import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from 'sonner';
import NextTopLoader from "nextjs-toploader";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: {
    default: "Rahul Rajput",
    template: "%s | Rahul Rajput",
  },
  description: "An extensive display of my full-stack development skills, experiences, and projects, demonstrating my proficiency and commitment to coding.",
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
  },
};

export const viewport = {
  viewPort: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange
        >
          <Header />
          <div className="absolute inset-0 -z-10 h-[550px] w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:34px_34px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto -ml-14 md:-ml-[0] h-[310px] w-[310px] rounded-full bg-primary opacity-20 blur-[100px]"></div></div>
          <NextTopLoader
            color="#2563eb"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
            shadow="0 0 10px #2563eb,0 0 5px #2563eb"
            template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
            zIndex={1600}
            showAtBottom={false}
          />
          {children}
          <Toaster position="top-right" />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
