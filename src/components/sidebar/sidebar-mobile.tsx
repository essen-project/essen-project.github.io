import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { items } from "./items"
import { Link } from "react-router-dom"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function SidebarMobile({ className }: SidebarProps) {
  return (
    <div className={cn("bottom-0 w-full bg-background fixed w-screen z-[100] border-t", className)}>
      <div className="space-x-4 px-4">
        <div className="py-4 px-2">
          <div className="space-x-1 flex justify-around">
            {
              items.slice(0, 5).map((item, i) => (
                <Button variant="ghost" className="justify-between" key={`item-${i}`} size={"icon"} asChild>
                  <Link to={ item.path }>
                  {item.icon && <item.icon className="m-2" />}
                  </Link>
                </Button>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}