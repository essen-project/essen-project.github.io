/* import { useEffect, useState } from "react"; */
import RootLayout from "./layout";
import Home from "./page";/* 
import LoadingScreen from "@/components/loadingscreen"; */
import { ThemeProvider } from "@/components/providers/theme-provider";

export default function App() {
  /* const [isLoaded, setIsLoaded] = useState(false); */

  /* useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        console.log("Website fully loaded");
        setIsLoaded(true);
      }, 2000);
    };
  
    window.addEventListener("load", handleLoad);
  
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []); */
  

  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        {
          /* !isLoaded ? <LoadingScreen /> :
             */<RootLayout>
              <Home />
            </RootLayout>
        }
      </ThemeProvider>

    </>
  );
}
