import { useState } from "react";
import css from "./Taxes.module.css";
function Taxes() {
  const [pensionFund, setPensionFund] = useState("");
  const [stateDuty, setStateDuty] = useState("");
  const [military, setMilitary] = useState("");
  const [militaryOld, setMilitaryOld] = useState("");
  const [militarySecondSale, setMilitarySecondSale] = useState("");
  const [pdfo, setPdfo] = useState("");
  const [pdfoSecond, setPdfoSecond] = useState("");
  const [pdfoSecondMax, setPdfoSecondMax] = useState("");

  function handlerPension(e) {
    let val = e.target.value;
    if (val === "") {
      setPensionFund("");
    } else {
      let num = parseInt(val);
      if (!isNaN(num)) setPensionFund(val);
    }
  }

  function handlerStateDuty(e) {
    const val = e.target.value;

    if (val === "") {
      setStateDuty("");
    } else {
      if (!isNaN(val)) {
        const num = parseInt(val);
        setStateDuty(num);
      }
    }
  }

  function handlerMilitary(e) {
    const val = e.target.value;

    if (val === "") {
      setMilitary("");
    } else {
      const num = parseInt(val);
      if (!isNaN(num)) {
        setMilitary(num);
      }
    }
  }
  // ----millitary Old
  function handlerMilitaryOld(e) {
    const val = e.target.value;
    if (val === "") {
      setMilitaryOld("");
    } else {
      const num = parseInt(val);
      if (!isNaN(num)) setMilitaryOld(num);
    }
  }
  // ----------militarySecondSale
  function handlerMilitarySecondSale(e) {
    const val = e.target.value;
    if (val === "") {
      setMilitarySecondSale("");
    } else {
      const num = parseInt(num);
      if (!isNaN(num)) setMilitarySecondSale(num);
    }
  }

  function handlerPdfo(e) {
    const val = e.target.value;
    if (val === "") setPdfo("");
    else {
      const num = parseInt(val);
      if (!isNaN(num)) setPdfo(num);
    }
  }
  // ======pdfoSecond
  function handlerPdfoSecond(e) {
    const val = e.target.value;
    if (val === "") setPdfoSecond("");
    else {
      const num = parseInt(val);
      if (isNaN(num)) setPdfoSecond(num);
    }
  }
  // ---pdfoMax
  function handlerPdfoSecondMax(e) {
    const val = e.target.value;
    if (val === "") setPdfoSecondMax("");
    else {
      const num = parseInt(val);
      if (!isNaN(num)) setPdfoSecondMax(num);
    }
  }
  return (
    <>
      <div className={css.taxesBox}>
        <h2>Перевірка знань з теми «Податки»:</h2>
        {/* -----------пенс */}
        <label>
          Скільки відсотків від оціночної вартості квартири сплачується до
          Пенсійного фонду при купівлі нерухомості? (%)
          <input
            type="number"
            value={pensionFund}
            onChange={handlerPension}
            style={{
              backgroundColor: Number(pensionFund) === 1 ? "green" : "red",
            }}
          />
        </label>
        <div>
          {Number(pensionFund) === 1 && (
            <div className={css.correctly}>
              <ul>
                <li>
                  Це державний платіж, обов`язковий при оформленні права
                  власності.
                </li>
                <li>Сплачує покупець нерухомості.</li>
                <li>
                  Розраховується від оціночної вартості майна, а не від суми
                  угоди (якщо оціночна вища за реальну ціну, платіж буде
                  більший).
                </li>
                <li>Мета — формування пенсійних внесків держави.</li>
              </ul>
              <p>
                Якщо оцінка квартири = 2 500 000 грн, то 1% = 25 000 грн сплачує
                покупець.
              </p>
            </div>
          )}
        </div>
        {/* ----------держ мито */}
        <label>
          Скільки відсотків від оціночної вартості квартири сплачується до
          державного мита при купівлі нерухомості? (%)
          <input
            type="number"
            value={stateDuty}
            onChange={handlerStateDuty}
            style={{ backgroundColor: stateDuty === 1 ? "green" : "red" }}
          />
        </label>
        <div>
          {parseInt(stateDuty) === 1 && (
            <div className={css.correctly}>
              <ul>
                <li>
                  Це обов’язковий державний платіж, який сплачується під час
                  нотаріального оформлення угоди.
                </li>
                <li>
                  Зазвичай сплачує продавець нерухомості (якщо сторони не
                  домовилися інакше).
                </li>
                <li>
                  Сума мита розраховується від оціночної вартості майна, а не
                  від фактичної ціни продажу.
                </li>
                <li>
                  Мета платежу — офіційне оформлення та реєстрація договору
                  купівлі-продажу.
                </li>
              </ul>
              <p>
                Якщо оціночна вартість квартири становить 2 500 000 грн, то 1%
                державного мита = 25 000 грн, які сплачує продавець.
              </p>
            </div>
          )}
        </div>

        {/* ------------війській збір */}
        <p>ст. 172</p>
        <p>
          військовий збір як окрема ставка зазначений у підрозділі 10 розд. XX
          Податкового кодексу України (у п. 1.2 та п. 16¹)
        </p>
        <label>
          Скільки відсотків від оціночної вартості квартири сплачується як
          військовий збір при купівлі нерухомості(нерухомість у власності менше
          3 років, і не спадок)? (%)
          <input
            type="number"
            value={military}
            onChange={handlerMilitary}
            style={{ backgroundColor: military === 5 ? "green" : "red" }}
          />
        </label>
        {/* ------------війській збір  > 3 років */}
        <label>
          Скільки відсотків від оціночної вартості квартири сплачується як
          військовий збір при купівлі нерухомості(нерухомість у власності ,
          більше 3 років)? (%)
          <input
            type="number"
            value={militaryOld}
            onChange={handlerMilitaryOld}
            style={{ backgroundColor: militaryOld === 0 ? "green" : "red" }}
          />
        </label>
        {/*  ------------війській збір 2 продаж за рік */}
        <label>
          Скільки відсотків від оціночної вартості квартири сплачується як
          військовий збір при купівлі нерухомості(2-й продаж за рік)? (%):
          <input
            type="number"
            value={militarySecondSale}
            onChange={handlerMilitarySecondSale}
            style={{
              backgroundColor: militarySecondSale === 5 ? "green" : "red",
            }}
          />
        </label>
        <hr />
        <label>
          У продавця перший об'єкт нерухомості який відчужують протягом року,
          право власності більше 3 років. Який ПДФО треба сплатити (відсотків
          від оціночної вартості квартири)
          <input
            type="number"
            value={pdfo}
            onChange={handlerPdfo}
            style={{ backgroundColor: pdfo === 0 ? "green" : "red" }}
          />
        </label>
        <label>
          У продавця другий об'єкт нерухомості який відчужують протягом року,
          право власності більше 3 років. Який ПДФО треба сплатити (відсотків
          від оціночної вартості квартири) (РЕЗИДЕНТИ)
          <input
            type="number"
            value={pdfoSecond}
            onChange={handlerPdfoSecond}
            style={{ backgroundColor: pdfoSecond === 5 ? "green" : "red" }}
          />
        </label>
        <label>
          У продавця другий об'єкт нерухомості який відчужують протягом року,
          право власності більше 3 років. Який ПДФО треба сплатити (відсотків
          від оціночної вартості квартири) (НЕРЕЗИДЕНТИ)
          <input
            type="number"
            value={pdfoSecondMax}
            onChange={handlerPdfoSecondMax}
            style={{ backgroundColor: pdfoSecondMax === 18 ? "green" : "red" }}
          />
        </label>
      </div>
    </>
  );
}

export default Taxes;
