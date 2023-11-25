import { useState } from "react";

function Tour({ id, image, info, name, price, filterTours }) {
  const [readMore, setReadMore] = useState(false);

  function toggleReadMore() {
    setReadMore((prev) => !prev);
  }

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button className="info-btn" onClick={toggleReadMore}>
            {readMore ? "Read More" : "Read Less"}
          </button>
        </p>

        <button className="btn btn-block" onClick={() => filterTours(id)}>
          Not Interested
        </button>
      </div>
    </article>
  );
}
export default Tour;
