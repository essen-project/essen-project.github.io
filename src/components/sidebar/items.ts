import { CalendarDays, Contact2, GaugeCircle, KanbanSquare, ListChecks, Presentation } from "lucide-react";

export const items = [
     {
       name: "Dashboard",
       path: "/",
       icon: GaugeCircle,
     },
     {
       name: "Projects",
       path: "/projects",
       icon: Presentation,
     },
     {
       name: "Tasks",
       path: "/tasks",
       icon: ListChecks,
     },
     {
       name: "Kanban Desk",
       path: "/desk",
       icon: KanbanSquare
     },
     {
       name: "Contacts",
       path: "/contacts",
       icon: Contact2,
     },
     {
       name: "Calendar",
       path: "/calendar",
       icon: CalendarDays
     },
   ];