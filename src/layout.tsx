import Navbar from '@/components/navbar/navbar'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { BrowserRouter as Router } from 'react-router-dom';

/* import Home from './home' */
   
   export default function RootLayout({
     children,
   }: {
     children: React.ReactNode;
   }) {
     return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <TailwindIndicator />
        <Router>
          <Navbar />
          {children}
        </Router>
      </ThemeProvider>
    </>
  )
}