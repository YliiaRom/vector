import "./App.css";
import Acordion from "./components/Acordion/Acordion";
import Bti from "./components/Bti/Bti";
import Calculator02 from "./components/Calculator02/Calculator02";
import EVіdnovlenya from "./components/EVіdnovlenya/EVіdnovlenya";

import QuestionsList from "./components/Questions/QuestionsList";
import Reader from "./components/Reader/Reader";
import Taxes from "./components/Taxes/Taxes";

function App() {
  return (
    <>
      <Calculator02 />
      {/* <Taxes /> */}
      <EVіdnovlenya />
      <Bti />
      <hr />
      <QuestionsList />

      <Reader />
      <Acordion />
    </>
  );
}

export default App;
