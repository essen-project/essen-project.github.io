/* import { columns } from "@/components/contacts/columns"
import { DataTable } from "@/components/contacts/data-table" */
/* 
import { contactsSchema } from "@/data/schema";
import data from "@/data/contacts.json"; */

/* function getTasks() {
   
  const parsedData = typeof data === "string" ? JSON.parse(data) : data;

  // Now, use the parsed data with the schema
  return contactsSchema.parse(parsedData);
} */

export default function Contacts() {
  /* const contacts = getTasks() */

  return (
    <>
      <div className="hidden flex-col md:flex">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Contacts</h2>
          </div>
          {/* <DataTable columns={columns} data={contacts} /> */}
        </div>
      </div>
    </>
  )
}