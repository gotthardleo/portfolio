
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Inter, Young_Serif, Source_Code_Pro } from "next/font/google";

const inter = Inter({
  variable: "Inter",
  subsets: ["latin"],
});

const young_serif = Young_Serif({
  variable: "Young_Serif",
  weight: ["400"],
  subsets: ["latin"],
});

const source_code_pro = Source_Code_Pro({
  variable: "Source_Code_Pro",
  subsets: ["latin"],
});

import "@/styles/globals.css";

export const metadata = {
  title: "Home | Gotthard Leo Portfolio",
  description: "Welcome to my portfolio!",
};

const ThemeProvider = ({ children, ...props }) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export default function RootLayout({ children }) {
  return (
    <html lang="en"
      className="dark"
      style={{colorScheme:"dark"}}>
      <body className={`${inter.variable} ${young_serif.variable} ${source_code_pro.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
