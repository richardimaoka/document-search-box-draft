import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./SearchInput.module.css";

interface Props {}

export function SearchInput(props: Props) {
  return (
    <div className={styles.component}>
      <FontAwesomeIcon className={styles.icon} icon={faMagnifyingGlass} />
      <input className={styles.input} placeholder="search in documentation" />
    </div>
  );
}
