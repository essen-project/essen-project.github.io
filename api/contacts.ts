// pages/api/tasks.ts

import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs/promises";
import path from "path";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await fs.readFile(
      path.join(process.cwd(), "..", "data", "contacts.json")
    );
    const contacts = JSON.parse(data.toString());
    res.status(200).json(contacts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
