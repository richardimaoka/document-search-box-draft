import { SearchResultItem } from "./SearchResultItem";
import styles from "./SearchResultList.module.css";

interface Props {}

export function SearchResultList(props: Props) {
  return (
    <ul className={styles.component}>
      <SearchResultItem name="aaa" />
      <SearchResultItem name="bbb" />
      <SearchResultItem name="ccc" />
      <SearchResultItem name="ddd" />
    </ul>
  );
}
