import "./App.css";
import Acordion from "./components/Acordion/Acordion";
import Bti from "./components/Bti/Bti";
import EVіdnovlenya from "./components/EVіdnovlenya/EVіdnovlenya";

import QuestionsList from "./components/Questions/QuestionsList";
import Reader from "./components/Reader/Reader";
import Taxes from "./components/Taxes/Taxes";

function App() {
  return (
    <>
      {/* <Taxes /> */}
      <hr />
      <QuestionsList />
      <Bti />
      <Reader />
      <Acordion />
      <EVіdnovlenya />
    </>
  );
}

export default App;
