import { SearchResultItem, SearchResultItemProps } from "./SearchResultItem";
import styles from "./SearchResultList.module.css";

interface Props {
  items: SearchResultItemProps[];
}

export function SearchResultList(props: Props) {
  return (
    <ul className={styles.component}>
      {props.items.map((x) => (
        <SearchResultItem
          key={x.name}
          name={x.name}
          description={x.description}
          breadcrumb={x.breadcrumb}
        />
      ))}
    </ul>
  );
}
