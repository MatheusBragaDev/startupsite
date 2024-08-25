import { ThemeProvider } from "@mui/system";
import themeDefault from "@/components/Theme/Theme";
import "./globals.css";


export const metadata = {
  title: "Vulcan Harbor Ventures",
  description: "Live Long and Grow Businesses",
  icons: {
    icon: '/icons/favicon.ico',
    apple: '/icons/apple-touch-icon.png',
    android: '/icons/android-chrome-192x192.png',
    favicon16: '/icons/favicon-16x16.png',
    favicon32: '/icons/favicon-32x32.png',
    safariPinnedTab: '/icons/safari-pinned-tab.svg',
  },
}


export default function RootLayout({ children }) {
  return (
      <html lang="en">
          <head>
              <link rel="icon" href="/icons/favicon.ico" />
              <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
              <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
              <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
              <link rel="manifest" href="/manifest.json" />
              <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />
              <meta name="theme-color" content="#ffffff" />
           </head>
        <body>
          <ThemeProvider theme={themeDefault}>
              {children}
          </ThemeProvider>
        </body>
      </html>
  );
}
