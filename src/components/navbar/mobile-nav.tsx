import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MenuIcon } from "lucide-react";
import { items } from "./items";
import { Link } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";
import { Search } from "./search";
import { UserNav } from "../dashboard/user-nav";

export function MobileNav() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex lg:hidden ml-auto" size={"icon"} variant={"ghost"}>
          <MenuIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[420px]">
        <DialogHeader className="text-left">
          <DialogTitle>essen</DialogTitle>
        </DialogHeader>
          <div className="flex flex-col items-center gap-2">
            {items.map((item) => (
              <Button key={item.name} variant={"ghost"} asChild>
                <Link to={item.path}>{item.name}</Link>
              </Button>
            ))}
          </div>
        <DialogFooter className="flex items-center gap-4">
        <div className="w-full flex items-center justify-between gap-4">
        <Search className="w-[350px] md:w-[250px]" />
         <ModeToggle />
         <UserNav />
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}