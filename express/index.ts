import { Request } from "express";
import * as fs from "fs";
import express from "express";
const app = express();
const port = 3035;

type DocEntry = {
  title: string;
  description: string;
  breadcrumb: string[];
};

function isArray(obj: any): obj is any[] {
  return true;
}

function isDocEntry(obj: any): obj is DocEntry {
  console.log("obj", obj);
  // Check title
  if ("title" in obj === false || typeof obj.title !== "string") {
    return false;
  }

  // Check description
  if ("description" in obj === false || typeof obj.description !== "string") {
    return false;
  }

  // Check breadcrumb
  if ("breadcrumb" in obj === false) {
    return false;
  }
  const breadcrumb = obj.breadcrumb;
  if (!isArray(breadcrumb)) {
    return false;
  }
  for (const b of breadcrumb) {
    if (typeof b !== "string") {
      return false;
    }
  }

  // If everything is ok, then true
  return true;
}

// Upon exception thrown from this func, let express.js default error handler to return 500 error.
// Use `asserts` to declare it throws. Exception messages are used to detail where things weng wrong.
function assertEntries(
  filename: string,
  arrOfObjs: any
): asserts arrOfObjs is DocEntry[] {
  if (!isArray(arrOfObjs)) {
    throw new Error(`data in file = '${filename}' is not an array`);
  }

  for (let index = 0; index < arrOfObjs.length; index++) {
    const elem = arrOfObjs[index];
    if (!isDocEntry(elem)) {
      throw new Error(
        `[${index}] element in file = '${filename}' is not a valid DocEntry`
      );
    }
  }
}

function readJson(): DocEntry[] {
  const filename = __dirname + "/data.json";

  // Get JSON from the file
  const jsonString = fs.readFileSync(filename, "utf8");

  // Let the default error handler of express.js to handle exceptions, which results in 500 error
  const entries = JSON.parse(jsonString);
  assertEntries(filename, entries);

  return entries;
}

function queryStringFilter(req: Request): string {
  if (typeof req.query.filter === "string") {
    return req.query.filter;
  } else {
    return "";
  }
}

function filterEntries(entries: DocEntry[], filterWord: string): DocEntry[] {
  return entries.filter((e) => {
    if (filterWord === "") {
      // empty string will actually cause .includes() method to always return true, but be explict here for read-ability
      return true;
    } else {
      return e.title.includes(filterWord) || e.description.includes(filterWord);
    }
  });
}

app.get("/", (req, res) => {
  // If an exception is thrown inside readJson(), it will cause the default error handler of express.js to return 500 error
  const entries = readJson();

  // Get query string `?filter=...`
  const filterWord = queryStringFilter(req);

  const filteredEntries = filterEntries(entries, filterWord);

  res.json(filteredEntries);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
