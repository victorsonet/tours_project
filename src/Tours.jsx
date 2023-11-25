import Tour from "./Tour";

function Tours({ tours, filterTours, fetchTours }) {
  return (
    <section>
      {tours.length != 0 ? (
        <section>
          <div className="title">
            <h2>Our Tours</h2>
            <div className="title-underline"></div>
          </div>
          <div className="tours">
            {tours.map((tour) => {
              return <Tour key={tour.id} {...tour} filterTours={filterTours} />;
            })}
          </div>
        </section>
      ) : (
        <section>
          <h2>No Tours</h2>
          <button
            className="btn"
            style={{ marginTop: "1rem" }}
            onClick={fetchTours}
          >
            Refresh
          </button>
        </section>
      )}
    </section>
  );
}
export default Tours;
