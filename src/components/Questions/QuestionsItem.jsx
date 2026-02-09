import { memo, useState } from "react";
import css from "./Questions.module.css";
function QuestionsItem({ dataQuestion, index }) {
  const [dataValue, setDataValue] = useState("");

  function handlerChange(e) {
    const val = e.target.value;

    if (val === "") setDataValue("");
    else {
      const num = parseInt(val);
      if (!isNaN(num)) setDataValue(num);
    }
  }

  let color = "red";
  if (dataValue === dataQuestion.result) color = "green";
  if (dataValue === "") color = "#fff";
  return (
    <div className={css.card}>
      <p className={css.cardNumber}> {index + 1}</p>
      <label>
        <span>{`${index + 1}) ${dataQuestion.questions}`}</span>
        <input
          type="number"
          value={dataValue}
          onChange={handlerChange}
          style={{
            backgroundColor: color,
          }}
        />
      </label>
    </div>
  );
}

export default memo(QuestionsItem);
// "id": "01",
//   "title": "1",
//   "questions": "",
//   "result": 1
