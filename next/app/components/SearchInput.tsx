import styles from "./SearchInput.module.css";
import { SearchResultItem } from "./SearchResultItem";

interface Props {}

export function SearchInput(props: Props) {
  return <input className={styles.component} />;
}
