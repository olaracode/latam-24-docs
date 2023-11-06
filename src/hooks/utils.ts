import { join } from "path";
import fs from "fs";

function generateRoute(basePath: string, fileName: string) {
  return join(process.cwd(), basePath, fileName);
}

function getContent(filePath: string, toJson?: boolean) {
  const content = fs.readFileSync(filePath, "utf8");
  return toJson ? JSON.parse(content) : content;
}

export { generateRoute, getContent };
