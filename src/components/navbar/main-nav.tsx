import { Link } from 'react-router-dom';
import { items } from './items';
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
      <nav
      className={cn("flex items-center space-x-3 lg:space-x-6", className)}
      {...props}
    >
      {
        items.map((item) => (
          <Button key={item.name} variant={"ghost"} size={"sm"} asChild>
            <Link to={item.path}>{item.name}</Link>
          </Button>
          
        ))
      }
      
      {/* <Link
        to="/dashboard"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Dashboard
      </Link>
      <Link
        to="/tasks"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Tasks
      </Link>
      <Link
        to="/desk"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Kanban Desk
      </Link>
      <Link
        to="/contacts"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Contacts
      </Link> */}
    </nav>
  )
}