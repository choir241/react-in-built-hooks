import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

export default function Ingredients() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["ingredients"],
    queryFn: () =>
      fetch("http://localhost:8000/ingredients").then((res) => res.json()),
  });

  const filteredList = useMemo(() => {
    return data?.filter((item) => {
      return item.quantity > 10;
    });
  }, [data]);

  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        filteredList?.map((item) => {
          return <div key={item._id}>{item.name}</div>;
        })
      )}
    </>
  );
}
