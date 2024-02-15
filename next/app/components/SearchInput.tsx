import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import styles from "./SearchInput.module.css";

interface Props {}

export function SearchInput(props: Props) {
  return (
    <div>
      <FontAwesomeIcon icon={faCoffee} /> <input className={styles.component} />
    </div>
  );
}
