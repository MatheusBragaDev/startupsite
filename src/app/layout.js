import { ThemeProvider } from "@mui/system";
import themeDefault from "@/components/Theme/Theme";
import "./globals.css";


export const metadata = {
  title: "Vulcan Harbor Venture",
  description: "Startup Site",
}


export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body>
          <ThemeProvider theme={themeDefault}>
              {children}
          </ThemeProvider>
        </body>
      </html>
  );
}
