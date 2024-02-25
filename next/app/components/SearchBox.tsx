"use client";

import { useEffect, useState } from "react";
import styles from "./SearchBox.module.css";
import { SearchInput } from "./SearchInput";
import { SearchResultItemProps } from "./SearchResultItem";
import { SearchResultList } from "./SearchResultList";
import { search } from "./searchActions";
import { DocEntry } from "../api";

interface Props {}

type SearchResults = {
  items: DocEntry[];
  filterWord: string;
};

export function SearchBox(props: Props) {
  const [filterWord, setFilterWord] = useState("");
  const [items, setItems] = useState<SearchResultItemProps[]>([]);

  // Instead of immediately setting search results to `items`, store the results here temporarily,
  // and only update the `items` when `filterWord` matches (i.e. the most-recent callServer() attempt)
  const [tempResults, setTempResults] = useState<SearchResults>({
    items: [],
    filterWord: "",
  });

  const waitingLastCallServerAttempt = filterWord !== tempResults.filterWord;

  async function callServer(w: string) {
    const [searchResults, sf] = await search(w);
    setTempResults({ items: searchResults, filterWord: w });
  }

  async function updateFilter(newFilterWord: string) {
    setFilterWord(newFilterWord);

    // no await, fire and forget
    callServer(newFilterWord);
  }

  useEffect(() => {
    if (!waitingLastCallServerAttempt) {
      setItems(tempResults.items);
    }
  }, [waitingLastCallServerAttempt, tempResults]);

  return (
    <div className={styles.component}>
      <SearchInput
        filterWord={filterWord}
        setFilterWord={updateFilter}
        loading={waitingLastCallServerAttempt}
      />
      <SearchResultList items={items} />
    </div>
  );
}
