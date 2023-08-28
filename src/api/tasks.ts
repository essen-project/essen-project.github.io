
import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs/promises";
import path from "path";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await fs.readFile(
      path.join(process.cwd(), "data", "tasks.json")
    );
    const tasks = JSON.parse(data.toString());
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
