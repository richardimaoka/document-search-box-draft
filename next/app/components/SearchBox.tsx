import styles from "./SearchBox.module.css";
import { SearchInput } from "./SearchInput";
import { SearchResultItemProps } from "./SearchResultItem";
import { SearchResultList } from "./SearchResultList";

interface Props {
  searchResultItems: SearchResultItemProps[];
}

export function SearchBox(props: Props) {
  return (
    <div className={styles.component}>
      <SearchInput />
      <SearchResultList items={props.searchResultItems} />
    </div>
  );
}
