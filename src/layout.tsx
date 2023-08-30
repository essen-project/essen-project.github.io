/* import Navbar from '@/components/navbar/navbar' */
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { BrowserRouter as Router } from 'react-router-dom';
import { Menu } from '@/components/menubar/menubar';
import { Sidebar } from '@/components/sidebar/sidebar';

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
          {/* <Navbar /> */}
          <Menu />
          <div className="border-t">
            <div className="bg-background">
              <div className="grid lg:grid-cols-5">
                <Sidebar className="hidden lg:block" />
                <div className="col-span-3 lg:col-span-4 lg:border-l">
                  <div className="h-full px-4 py-6 lg:px-8">
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Router>
      </ScrollArea>
    </>
  )
}