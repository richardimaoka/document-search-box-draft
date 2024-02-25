"use server";

import { fetchData, DocEntry } from "../api";

export async function search(
  filterWord: string
): Promise<[DocEntry[], string]> {
  const results = await fetchData(filterWord);

  return [results, filterWord];
}
