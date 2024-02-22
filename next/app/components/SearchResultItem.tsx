import { SearchResultBreadcrumb } from "./SearchResultBreadcrumb";
import styles from "./SearchResultItem.module.css";

interface Props {
  name: string;
  description: string;
  breadcrumb: string[];
}

export type SearchResultItemProps = Props;

export function SearchResultItem(props: Props) {
  return (
    <li className={styles.component}>
      <div className={styles.title}>{props.name}</div>
      <SearchResultBreadcrumb breadcrumb={props.breadcrumb} />
      <div className={styles.description}>{props.description}</div>
    </li>
  );
}
