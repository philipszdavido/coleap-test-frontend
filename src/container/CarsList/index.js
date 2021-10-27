import { useEffect, useState } from "react";
import axios from "axios";

import CarCard from "../../components/CarCard";
import Dropdown from "../../components/Dropdown";
import SortButton from "../../components/SortButton";
import { CarModal } from "../../components/CarModal";

const API = "https://6157228e8f7ea600179850e4.mockapi.io/api/vehicles";

export default function CarsList() {
  const [cars, setCars] = useState([]);
  const [activeCar, setActiveCar] = useState();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState("range");

  useEffect(() => {
    async function fetchCars() {
      setLoading(true);
      try {
        const resultData = await axios.get(API);
        setCars(resultData?.data);
        setLoading(false);
      } catch (error) {
        setCars(null);
        setLoading(false);
      }
    }
    fetchCars();
  }, [cars]);

  function toggleDropdownFn() {
    setShowDropdown((previousVallue) => !previousVallue);
  }

  function sortByFn(value) {
    setSortBy(value);
    setShowDropdown((previousVallue) => !previousVallue);
  }

  function setActiveCarFn(car) {
    setActiveCar(car);
    setShowModal(true);
  }

  function closeModalFn() {
    setShowModal((previousVallue) => !previousVallue);
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          padding: "0.65rem 0",
        }}
      >
        <span>Sort by:</span>
        <SortButton
          styling={{ position: "relative" }}
          clickFn={toggleDropdownFn}
        >
          {sortBy.toLocaleUpperCase()}
        </SortButton>
        {showDropdown && (
          <Dropdown
            clickFn={sortByFn}
            dropdownVisibleFn={setShowDropdown}
            dropdownVisible={showDropdown}
          />
        )}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", marginBottom: "10px" }}>
        {loading && "Loading cars..."}
        {!loading && !cars && <h2>No cars here</h2>}
        {!loading && cars && cars.length == 0 ? <h2>No cars here</h2> : null}
        {!loading &&
          cars &&
          cars.length > 0 &&
          cars
            .sort(function (a, b) {
              let valueA, valueB;
              switch (sortBy) {
                case "range":
                  valueA = +a.range.distance;
                  valueB = +b.range.distance;
                  break;
                case "price":
                  valueA = parseInt(a.price);
                  valueB = parseInt(b.price);
                  break;
                default:
                  break;
              }
              return valueA - valueB;
            })
            .map((car, i) => {
              return <CarCard car={car} key={i} clickFn={setActiveCarFn} />;
            })}
      </div>
      {showModal ? (
        <CarModal car={activeCar} closeModal={closeModalFn} />
      ) : null}
    </>
  );
}
