import { useEffect, useState } from "react";
import RootLayout from "./layout";
import Home from "./page";
import LoadingScreen from "@/components/loadingscreen";
import { ThemeProvider } from "@/components/providers/theme-provider";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Listen to the window's load event to determine when the website is fully loaded
    window.onload = () => {
      setTimeout(() => {
        setIsLoaded(true);
      }, 2000);
    };
  }, []);

  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        {
          !isLoaded ? <LoadingScreen /> :
            <RootLayout>
              <Home />
            </RootLayout>
        }
      </ThemeProvider>

    </>
  );
}
