import Navbar from '@/components/navbar/navbar'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { BrowserRouter as Router } from 'react-router-dom';

/* import Home from './home' */
   
   export default function RootLayout({
     children,
   }: {
     children: React.ReactNode;
   }) {
     return (
    <>
      <TailwindIndicator />
        <ScrollArea className="h-screen rounded-md border">
        <Router>
          <Navbar />
          {children}
        </Router>
        </ScrollArea>
    </>
  )
}