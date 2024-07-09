'use client'

import { ThemeProvider } from "@mui/system";
import themeDefault from "@/components/Theme/Theme";
import "./globals.css";

import Head from "next/head";




export default function RootLayout({ children }) {
  return (
      <>
      <Head>
        <title>Vulcan Harbour Venture</title>
      </Head>
      <html lang="en">
        <body>
          
          <ThemeProvider theme={themeDefault}>
              {children}
            </ThemeProvider>
        </body>
      </html>
      </>

  );
}
