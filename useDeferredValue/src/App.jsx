import { Suspense } from "react";
import { lazy, useState, useDeferredValue } from "react";

export default function App() {
  const [item, setItem] = useState("");

  const deferredItem = useDeferredValue(item);

  const Search = lazy(()=> import("./components/Search"));

  return (
    <>
      <input
        type="search"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />

      <Suspense fallback={<h1>Loading...</h1>}>
        <Search item={deferredItem} />
      </Suspense>
    </>
  );
}
