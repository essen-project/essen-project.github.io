interface Task {
     id: string;
     title: string;
     status: string;
     label: string;
     priority: string;
   }

import { Metadata } from "next";
import { useEffect, useState } from "react";
import { columns } from "@/components/tasks/columns";
import { DataTable } from "@/components/tasks/data-table";
import { taskSchema } from "@/data/schema";
import Navbar from "@/components/navbar/navbar";

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
};

export default function Tasks() {
     const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("@/api/tasks");
        if (response.ok) {
          const data = await response.json();
          setTasks(taskSchema.array().parse(data));
        } else {
          console.error("Error fetching tasks:", response.status);
        }
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <Navbar />
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  );
}
