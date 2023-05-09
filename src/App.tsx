import { useEffect, useState } from "react";
import { CountriesTable } from "./components/countries-table";
import { USED_API } from "./constants/usedApi";
import { FilterTools } from "./components/filter-tools";
import { useCustomStore } from "./store/Store";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  //Throw to Error Boundery component.
  if (error) throw error;

  const { setData, correctData } = useCustomStore();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(USED_API);
        if (!response.ok) throw new Error("Response invalid");
        const data = await response.json();
        setData(data.slice(0, 40));
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <FilterTools />
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <CountriesTable data={correctData} />
      )}
    </div>
  );
};

export default App;
