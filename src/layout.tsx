/* import Navbar from '@/components/navbar/navbar' */
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { BrowserRouter as Router } from 'react-router-dom';
import { Menu } from '@/components/menubar/menubar';
import { Sidebar } from '@/components/sidebar/sidebar';
import { SidebarMobile } from './components/sidebar/sidebar-mobile';
import { ScrollBar } from './components/ui/scroll-area';

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
          <div className="">
            <div className="bg-background mt-[40px]">
              <div className="grid lg:grid-cols-5 w-screen lg:w-full">
                <Sidebar className="hidden lg:block"/>
                <SidebarMobile className="lg:hidden" />
                <div className="col-span-3 lg:col-span-4 lg:border-l w-screen lg:w-full">
                <ScrollArea className="h-[calc(100vh - 112px)] lg:h-[calc(100vh - 50px)] w-full">
                  <div className="h-full px-4 py-6 lg:px-8 pb-[80px] lg:pb-6 w-full">
                    {children}
                  </div>
                  <ScrollBar orientation='vertical' />
                </ScrollArea>
                </div>
              </div>
            </div>
          </div>
        </Router>
    </>
  )
}