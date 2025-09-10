import "./globals.css";
import Navbar from "../../components/Navbar";
import PageTransition from "../../components/Transitions";
import ThemeProvider from "../../components/ThemeProvider";
import localFont from "next/font/local";

// Font imports
const veraBold = localFont({
  src: '../fonts/VeraMoBd.ttf',
  display: 'swap',
  variable: '--font-vera-bold',
})

const vcrMono = localFont({
  src: '../fonts/VCR_OSD_MONO_1.001.ttf',
  display: 'swap',
  variable: '--font-vcr-mono',
})

export const metadata = {
  title: "My Photoshop Portfolio",
  description: "A showcase of my Photoshop works",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${veraBold.variable} ${vcrMono.variable} dark`}>
      <body>
        <ThemeProvider>
          <Navbar />
          <PageTransition>{children}</PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
