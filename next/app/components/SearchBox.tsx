import styles from "./SearchBox.module.css";
import { SearchInput } from "./SearchInput";
import { SearchResultList } from "./SearchResultList";

interface Props {}

export function SearchBox(props: Props) {
  return (
    <div className={styles.component}>
      <SearchInput />
      <SearchResultList />
    </div>
  );
}
