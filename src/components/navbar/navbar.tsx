import { Search } from "@/components/dashboard/search"
import { MainNav } from "./main-nav"
/* import TeamSwitcher from "@/components/dashboard/team-switcher" */
import { UserNav } from "@/components/dashboard/user-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { Icons as Icon } from "@/components/icons"

function Navbar() {
  return (
     <div className="border-b">
     <div className="flex h-16 items-center px-8 w-full">
       <Icon.logo className="w-32 h-9"/>
       {/* <TeamSwitcher /> */}
       <MainNav className="mx-6" />
       <div className="ml-auto flex items-center space-x-4">
         <Search />
         <ModeToggle />
         <UserNav />
       </div>
     </div>
   </div>
  );
}

export default Navbar;