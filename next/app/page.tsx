import styles from "./page.module.css";
import { SearchBox } from "./components/SearchBox";
import { fetchData } from "./api";

export default async function Home() {
  const entries = await fetchData();

  return <SearchBox searchResultItems={entries} />;
}
