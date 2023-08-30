import { Metadata } from "next";
import { taskSchema } from "@/data/schema";
import { z } from "zod"
import data from "@/data/tasks.json";

import { columns } from "@/components/tasks/columns";
import { DataTable } from "@/components/tasks/data-table";

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
};

function getTasks() {
   
     const parsedData = typeof data === "string" ? JSON.parse(data) : data;
   
     return z.array(taskSchema).parse(parsedData)
}
export default function Tasks() {  
   const tasks = getTasks()
  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 md:flex">
        <h2 className="text-3xl font-bold tracking-tight">Tasks</h2>
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  );
}
