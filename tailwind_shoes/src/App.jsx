/* eslint-disable react/prop-types */

import { ShoeDetail } from "./components/ShoeDetail";
import { Navbar } from "./components/nav";
import { Card } from "./components/Card";
import { NewArrivalSection } from "./components/NewArrivalSection";
import { SHOE_LIST } from "./constants";

export function App() {
  return (
    <div className="animate-fadeIn text-black xl:px-24 p-10 text-2xl">
      <Navbar />
      <ShoeDetail />
      <NewArrivalSection items={SHOE_LIST} />
    </div>
  );
}
