import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./components/DaisyNave/DaisyNav";
import NavBar from "./components/NavBar/NavBar";
import PricingOption from "./components/pricingOption/pricingOption";
import ResultChart from "./components/ResultChart/ResultChart";
import axios from "axios";
import MarksChart from "./components/MarksChart/MarksChart";

function App() {
  const pricingPromise = fetch("pricingData.json").then((res) => res.json());
  const marksPromise = axios.get("marksData.json");

  return (
    <>
      <header>
        <NavBar></NavBar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-md"></span>
          }
        >
          <PricingOption pricingPromise={pricingPromise}></PricingOption>
        </Suspense>

        <Suspense fallback={
          <span className="loading loading-spinner loading-md"></span>}> 
          <MarksChart marksPromise={marksPromise}></MarksChart>
        </Suspense>

        <ResultChart></ResultChart>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
