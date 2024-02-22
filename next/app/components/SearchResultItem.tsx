import { SearchResultBreadcrumb } from "./SearchResultBreadcrumb";
import styles from "./SearchResultItem.module.css";

interface Props {
  name: string;
  description: string;
  breadcrumb: string[];
}

export function SearchResultItem(props: Props) {
  return (
    <li className={styles.component}>
      <div>{props.name}</div>
      <SearchResultBreadcrumb breadcrumb={props.breadcrumb} />
      <div>{props.name}</div>
    </li>
  );
}
