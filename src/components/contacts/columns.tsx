"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { ColumnDef } from "@tanstack/react-table"
import { DataTableColumnHeader } from "../tasks/data-table-column-header"
import { roles } from "@/data/data"
import { Contacts as Contact } from "@/data/schema"

export const columns: ColumnDef<Contact>[] = [
   {
      id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
   accessorKey: "id",
   header: ({ column }) => (
     <DataTableColumnHeader column={column} title="Contact" />
   ),
   cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
   enableSorting: false,
   enableHiding: false,
 },
  {
   accessorKey: "name",
   header: ({ column }) => (
     <DataTableColumnHeader column={column} title="Name" />
   ),
   cell: ({ row }) => {
     return (
       <div className="flex space-x-2">
         <span className="max-w-[500px] truncate font-medium">
           {row.getValue("name")}
         </span>
       </div>
     )
   },
  },
  {
   accessorKey: "email",
   header: ({ column }) => (
     <DataTableColumnHeader column={column} title="Email" />
   ),
   cell: ({ row }) => {
      return (
       <div className="flex space-x-2">
         <span className="max-w-[200px] truncate font-medium">
           {row.getValue("email")}
         </span>
       </div>
     )
   },
  },
  {
   accessorKey: "phone",
   header: ({ column }) => (
     <DataTableColumnHeader column={column} title="Phone" />
   ),
   cell: ({ row }) => {
     return (
       <div className="flex space-x-2">
         <span className="max-w-[100px] truncate font-medium">
           {row.getValue("phone")}
         </span>
       </div>
     )
   },
  },
  /* {
   accessorKey: "address",
   header: ({ column }) => (
     <DataTableColumnHeader column={column} title="Address" />
   ),
   cell: ({ row }) => {
     return (
       <div className="flex space-x-2">
         <span className="max-w-[200px] truncate font-medium">
           {row.getValue("address")}
         </span>
       </div>
     )
   },
  }, */
  {
   accessorKey: "role",
   header: ({ column }) => (
     <DataTableColumnHeader column={column} title="Role" />
   ),
   cell: ({ row }) => {
      const role = roles.find(
        (role) => role.value === row.getValue("role")
      )

      if (!role) {
        return null
      }

      return (
        <div className="flex w-[100px] items-center">
          <span>{role.label}</span>
        </div>
      )
    },
   filterFn: (row, id, value) => {
     return value.includes(row.getValue(id))
   },
  },
  {
   accessorKey: "position",
   header: ({ column }) => (
     <DataTableColumnHeader column={column} title="Position" />
   ),
   cell: ({ row }) => {
     return (
       <div className="flex space-x-2">
         <span className="max-w-[200px] truncate font-medium">
           {row.getValue("position")}
         </span>
       </div>
     )
   },
  }
]
