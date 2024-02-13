import styles from "./SearchResultItem.module.css";

interface Props {
  name: string;
}

export function SearchResultItem(props: Props) {
  return <li className={styles.component}>{props.name}</li>;
}
