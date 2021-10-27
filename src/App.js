import "./App.css";

import CarsList from "./container/CarsList";
import Header from "./components/Header";

function App() {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap');
      </style>{" "}
      <Header />
      <main>
        <CarsList />
      </main>
    </>
  );
}

export default App;
