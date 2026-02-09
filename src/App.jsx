import "./App.css";
import Acordion from "./components/Acordion/Acordion";
import Bti from "./components/Bti/Bti";

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
    </>
  );
}

export default App;
