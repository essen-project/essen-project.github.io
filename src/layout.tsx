/* import Navbar from '@/components/navbar/navbar' */
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { ScrollArea } from '@/components/ui/scroll-area';
import { BrowserRouter as Router } from 'react-router-dom';
import { Menu } from '@/components/menubar/menubar';
import { Sidebar } from '@/components/sidebar/sidebar';
import { SidebarMobile } from './components/sidebar/sidebar-mobile';
import { Separator } from '@/components/ui/separator';
import { useState } from 'react';

/* import Home from './home' */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeTab, setActiveTab] = useState('/'); // Initialize the active tab

  // Function to update the active tab when a tab is clicked
  const handleTabClick = (tabPath: string) => {
    setActiveTab(tabPath);
  };
  
  return (
    <>
      <TailwindIndicator />
      <Router>
          {/* <Navbar /> */}
          <Menu />
          <div className="">
            <div className="bg-background mt-[40px]">
              <div className="flex grow overflow-auto w-screen lg:w-full relative">
                <Sidebar
                  className="flex-none flex flex-column w-[256px] hidden lg:block"
                  activeTab={activeTab}
                  onTabClick={handleTabClick}
                />
                <Separator className="hidden lg:block" orientation="vertical" />
                <SidebarMobile className="lg:hidden" />
                <ScrollArea style={
                  {
                    height: 'calc(100vh - 40px)',
                    width: '100vw',
                  }
                }>
                <div className="relative col-span-3 lg:col-span-4 lg:border-l w-screen lg:w-full px-4 py-6 lg:px-8 pb-[100px] lg:pb-6">
                  <div className="h-full">
                  {children}
                  </div>
                </div>
                </ScrollArea>
                
              </div>
            </div>
          </div>
        </Router>
    </>
  )
}