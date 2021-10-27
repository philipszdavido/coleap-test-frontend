import "./CarModal.css";

export function CarModal({ car, closeModal }) {
  return (
    <div className="modal">
      <div className="modalBackdrop" onClick={closeModal}></div>
      <div className="modalBody">
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
          <div style={{ display: "flex", width: "100%", alignItems: "center" }}>
            <h2 style={{ marginRight: "3px" }}>Colors</h2>
            {car.colors.map((color) => (
              <span
                style={{
                  padding: "0.3rem",
                  border: "1px solid rgba(0, 0, 0, 0.2)",
                  margin: "1px",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  height: "20px",
                }}
              >
                {color}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
