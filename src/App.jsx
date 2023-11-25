import { useEffect } from "react";
import { useState } from "react";
import Tours from "./Tours";
import Tour from "./Tour";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);

  async function fetchTours() {
    const response = await fetch(url);
    const json = await response.json();
    setTours(json);
  }

  useEffect(() => {
    fetchTours();
  }, []);

  function filterTours(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  return (
    <main className="main">
      <Tours tours={tours} filterTours={filterTours} fetchTours={fetchTours} />
    </main>
  );
};
export default App;
