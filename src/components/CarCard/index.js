import "./CarCard.css";

export default function CarCard({ car, clickFn }) {
  return (
    <a href="!#" className="carCard" onClick={(e) => clickFn(car)}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={`${car.photo}`} className="carImage" alt="" />
      </div>
      <div style={{ padding: "10px" }}>
        <h1 className="carName">{car.make}</h1>
        <div className="carDetails">
          <span>Make: </span>
          <b>{car.make}</b>
        </div>
        <div className="carDetails">
          <span>Model: </span>
          <b>{car.model}</b>
        </div>
        <div className="carDetails">
          <span>Price: </span>
          <b>
            <i>{car.price}</i>
          </b>
        </div>
      </div>
    </a>
  );
}
