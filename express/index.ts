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

function readJson(): DocEntry[] {
  // Get JSON from the file
  const jsonString = fs.readFileSync(__dirname + "/data.json", "utf8");

  // Let the default error handler of express.js to handle JSON parse exceptions, which results in 500 error
  const arrayOfObjs = JSON.parse(jsonString);

  const docEntries: DocEntry[] = [];
  if (isArray(arrayOfObjs)) {
    for (const elem of arrayOfObjs) {
      const entry: DocEntry = {
        title: "",
        description: "",
        breadcrumb: [],
      };

      if (typeof elem === "object") {
        let doPushEntry = false;
        if ("title" in elem && typeof elem.title === "string") {
          entry.title = elem.title;
          doPushEntry = true;
        }

        if ("description" in elem && typeof elem.description === "string") {
          entry.title = elem.description;
          doPushEntry = true;
        }

        if ("breadcrumb" in elem && Array.isArray(elem.breadcrumb)) {
          for (const b of elem.breadcrumb) {
            if (typeof b === "string") {
              entry.breadcrumb.push(b);
              doPushEntry = true;
            }
          }
        }

        if (doPushEntry) {
          docEntries.push(entry);
        }
      }
    }
  }

  return docEntries;
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

  res.send(filteredEntries);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
