import {
     Avatar,
     AvatarFallback,
     AvatarImage,
   } from "@/components/ui/avatar"
   
   export function RecentActivities() {
     return (
       <div className="space-y-8">
         <div className="flex items-center">
           <Avatar className="h-9 w-9">
             <AvatarImage src="https://ui.shadcn.com/avatars/01.png" alt="Avatar" />
             <AvatarFallback>OM</AvatarFallback>
           </Avatar>
           <div className="ml-4 space-y-1 text-left">
             <p className="text-sm font-medium leading-none">Olivia Martin</p>
           </div>
           <div className="ml-auto font-medium">marked task as complete</div>
         </div>
         <div className="flex items-center">
           <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
             <AvatarImage src="https://ui.shadcn.com/avatars/02.png" alt="Avatar" />
             <AvatarFallback>JL</AvatarFallback>
           </Avatar>
           <div className="ml-4 space-y-1 text-left">
             <p className="text-sm font-medium leading-none">Jackson Lee</p>
           </div>
           <div className="ml-auto font-medium">marked task as complete</div>
         </div>
         <div className="flex items-center">
           <Avatar className="h-9 w-9">
             <AvatarImage src="https://ui.shadcn.com/avatars/03.png" alt="Avatar" />
             <AvatarFallback>IN</AvatarFallback>
           </Avatar>
           <div className="ml-4 space-y-1 text-left">
             <p className="text-sm font-medium leading-none">Isabella Nguyen</p>
           </div>
           <div className="ml-auto font-medium">marked task as complete</div>
         </div>
         <div className="flex items-center">
           <Avatar className="h-9 w-9">
             <AvatarImage src="https://ui.shadcn.com/avatars/04.png" alt="Avatar" />
             <AvatarFallback>WK</AvatarFallback>
           </Avatar>
           <div className="ml-4 space-y-1 text-left">
             <p className="text-sm font-medium leading-none">William Kim</p>
           </div>
           <div className="ml-auto font-medium">marked task as complete</div>
         </div>
         <div className="flex items-center">
           <Avatar className="h-9 w-9">
             <AvatarImage src="https://ui.shadcn.com/avatars/05.png" alt="Avatar" />
             <AvatarFallback>SD</AvatarFallback>
           </Avatar>
           <div className="ml-4 space-y-1 text-left">
             <p className="text-sm font-medium leading-none">Sofia Davis</p>
           </div>
           <div className="ml-auto font-medium">marked task as complete</div>
         </div>
       </div>
     )
   }