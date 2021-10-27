import "./CarModal.css";

export function CarModal({ car, closeModal }) {
  return (
    <div className="modal">
      <a className="modalBackdrop" onClick={closeModal}></a>
      <div className="modalBody">
        <span style={{ display: "flex", justifyContent: "flex-end" }}>
          <a onClick={closeModal} style={{ cursor: "pointer" }}>
            X
          </a>
        </span>
        <div className="modalCarDetails">
          <h1>{car?.make}</h1>
          <img className="modalImage" src={car?.photo} />
          <div style={{ display: "flex", width: "100%" }}>
            <div className="modalCarMiniDetails">
              <span>Price</span>
              <h2>{car?.price}</h2>
            </div>
            <div className="modalCarMiniDetails">
              <span>Model</span>
              <h2>{car?.model}</h2>
            </div>
            <div className="modalCarMiniDetails">
              <span>Range</span>
              <h2>
                {car?.range?.distance} {car?.range?.unit}
              </h2>
            </div>
          </div>
          <div className="carColor">
            <h2 style={{ marginRight: "3px" }}>Colors</h2>
            {car.colors.map((color) => (
              <span>{color}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
