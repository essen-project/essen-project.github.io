/* import Navbar from '@/components/navbar/navbar' */
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { BrowserRouter as Router } from 'react-router-dom';
import { Menu } from '@/components/menubar/menubar';
import { Sidebar } from '@/components/sidebar/sidebar';
import { SidebarMobile } from './components/sidebar/sidebar-mobile';

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
          {/* <Navbar /> */}
          <Menu />
          <div className="border-t">
            <div className="bg-background">
              <div className="grid lg:grid-cols-5 w-screen">
                <Sidebar className="hidden lg:block"/>
                <SidebarMobile className="lg:hidden" />
                <div className="col-span-3 lg:col-span-4 lg:border-l w-screen">
                <ScrollArea className="h-screen w-full">
                  <div className="h-[calc(100vh - 72px)] px-4 py-6 lg:px-8 pb-[80px] lg:pb-6 w-full">
                    {children}
                  </div>
                </ScrollArea>
                </div>
              </div>
            </div>
          </div>
        </Router>
    </>
  )
}