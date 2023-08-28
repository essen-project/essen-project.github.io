import { Search } from "@/components/dashboard/search"
import { MainNav } from "./main-nav"
/* import TeamSwitcher from "@/components/dashboard/team-switcher" */
import { UserNav } from "@/components/dashboard/user-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { Icons as Icon } from "@/components/icons"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="border-b xl:mx-36 2xl:mx-56">
     <div className="flex h-16 items-center p-8 w-full">
      <Link to="/">
        <Icon.logo className="w-32 h-9"/>
      </Link>
       {/* <TeamSwitcher /> */}
       <MainNav className="mx-6" />
       <div className="ml-auto flex items-center space-x-4">
         <Search />
         <ModeToggle />
         <UserNav />
       </div>
     </div>
   </nav>
  );
}

export default Navbar;