import styles from "./SearchResultBreadcrumb.module.css";

interface Props {
  breadcrumb: string[];
}

export function SearchResultBreadcrumb(props: Props) {
  return (
    <div className={styles.component}>
      {props.breadcrumb.map((x) => (
        <div key={x}>{x}</div>
      ))}
    </div>
  );
}
