import { useState } from "react";

import Header from "./components/Header";
import BillForm from "./components/BillForm";
import BillResult from "./components/BillResult";

function App() {
  const [bill, setBill] = useState(null);

  return (
    <div className="app">
      <Header />

      <BillForm setBill={setBill} />

      <BillResult bill={bill} />
    </div>
  );
}

export default App;