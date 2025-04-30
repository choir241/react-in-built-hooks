import { useState, useDeferredValue, useEffect } from "react";
import axios from "axios";

export default function Search({ item }) {
  const [data, setData] = useState([]);

  const deferredItem = useDeferredValue(item);

  useEffect(() => {
    async function getItems() {
      if (deferredItem) {
        const response = await axios.get("http://localhost:8000/ingredients");
        const arr = [];
        response.data.forEach((items) => {
          if (
            items.name
              .toLowerCase()
              .substring(0, deferredItem.length)
              .includes(deferredItem)
          ) {
            arr.push(items.name);
          }
        });
        setData(arr);
      }
    }

    getItems();
  }, [deferredItem]);

  return (
    <section>
      {data.map((items) => {
        return <>{items}</>;
      })}
    </section>
  );
}
