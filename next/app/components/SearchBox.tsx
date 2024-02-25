"use client";

import { useEffect, useState } from "react";
import styles from "./SearchBox.module.css";
import { SearchInput } from "./SearchInput";
import { SearchResultItemProps } from "./SearchResultItem";
import { SearchResultList } from "./SearchResultList";
import { search } from "./searchActions";

interface Props {}

export function SearchBox(props: Props) {
  const [filterWord, setFilterWord] = useState("");
  const [items, setItems] = useState<SearchResultItemProps[]>([]);

  useEffect(() => {
    async function callServer() {
      const searchResults = await search(filterWord);
      setItems(searchResults);
    }
    callServer();
  }, [filterWord]);

  return (
    <div className={styles.component}>
      <SearchInput filterWord={filterWord} setFilterWord={setFilterWord} />
      <SearchResultList items={items} />
    </div>
  );
}
