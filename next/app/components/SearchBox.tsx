"use client";

import { useState } from "react";
import styles from "./SearchBox.module.css";
import { SearchInput } from "./SearchInput";
import { SearchResultItemProps } from "./SearchResultItem";
import { SearchResultList } from "./SearchResultList";
import { search } from "./searchActions";

interface Props {}

export function SearchBox(props: Props) {
  const [filterWord, setFilterWord] = useState("");
  const [items, setItems] = useState<SearchResultItemProps[]>([]);

  async function updateFilterWord(w: string) {
    setFilterWord(w);
    const searchResults = await search(w);
    setItems(searchResults);
  }

  return (
    <div className={styles.component}>
      <SearchInput filterWord={filterWord} setFilterWord={updateFilterWord} />
      <SearchResultList items={items} />
    </div>
  );
}
