import styles from "./page.module.css";
import { SearchInput } from "./components/SearchInput";

export default function Home() {
  return (
    <div className={styles.component}>
      <SearchInput />
    </div>
  );
}
