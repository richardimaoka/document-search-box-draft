"use client";

import { useEffect, useState } from "react";
import styles from "./SearchBox.module.css";
import { SearchInput } from "./SearchInput";
import { SearchResultItemProps } from "./SearchResultItem";
import { SearchResultList } from "./SearchResultList";
import { search } from "./searchActions";
import { DocEntry } from "../api";

interface Props {}

type SearchResult = {
  results: DocEntry[];
  filterWord: string;
};

export function SearchBox(props: Props) {
  const [filterWord, setFilterWord] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult>({
    results: [],
    filterWord: "",
  });
  const [items, setItems] = useState<SearchResultItemProps[]>([]);

  async function callServer(w: string) {
    const [searchResults, sf] = await search(w);
    setSearchResults({ results: searchResults, filterWord: w });
  }

  async function updateFilter(newFilterWord: string) {
    setFilterWord(newFilterWord);

    // no await, fire and forget
    callServer(newFilterWord);
  }

  useEffect(() => {
    if (filterWord === searchResults.filterWord) {
      setItems(searchResults.results);
    } else {
      console.log(
        `loading... fiterWord = '${filterWord}', fiterWord from search = '${searchResults.filterWord}'`
      );
    }
  }, [filterWord, searchResults]);

  return (
    <div className={styles.component}>
      <SearchInput filterWord={filterWord} setFilterWord={updateFilter} />
      <SearchResultList items={items} />
    </div>
  );
}
