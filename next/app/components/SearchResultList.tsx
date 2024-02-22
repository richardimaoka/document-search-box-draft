import { SearchResultItem } from "./SearchResultItem";
import styles from "./SearchResultList.module.css";

interface Props {}

export function SearchResultList(props: Props) {
  return (
    <ul className={styles.component}>
      <SearchResultItem
        name="aaa"
        description=""
        breadcrumb={["a", "b", "c"]}
      />
      <SearchResultItem
        name="bbb"
        description=""
        breadcrumb={["a", "b", "c"]}
      />
      <SearchResultItem
        name="ccc"
        description=""
        breadcrumb={["a", "b", "c"]}
      />
      <SearchResultItem
        name="ddd"
        description=""
        breadcrumb={["a", "b", "c"]}
      />
    </ul>
  );
}
