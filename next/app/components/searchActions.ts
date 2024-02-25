"use server";

import { fetchData, DocEntry } from "../api";

export async function search(filterWord: string): Promise<DocEntry[]> {
  return fetchData(filterWord);
}
