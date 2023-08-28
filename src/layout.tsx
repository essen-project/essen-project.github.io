import Navbar from '@/components/navbar/navbar'
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
      <TailwindIndicator />
        <Router>
          <Navbar />
          {children}
        </Router>
    </>
  )
}