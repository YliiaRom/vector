import { useState } from "react";
import css from "./Reader.module.css";
import pages from "../helpers/vaucher.json";

function Reader() {
  const [numIndex, setNumIndex] = useState(1);
  const lengthPages = pages.length - 1;
  let numPage = numIndex;

  let activePage = pages[numIndex + 1];
  function handlerPrev() {
    setNumIndex((prev) => prev - 1);
  }
  function handlerNext() {
    setNumIndex((prev) => prev + 1);
  }

  let disabledNext = numIndex >= pages.length - 2;
  let disabledPrev = numIndex === 1;
  console.log("reader");
  return (
    <div className={css.section}>
      <div className={css.box}>
        <h2>Постанова № 1176 (Ваучер : 2 000 000)</h2>
        <div className={css.descriptionRov}>
          <div>
            <button onClick={handlerPrev} disabled={disabledPrev}>
              Prev
            </button>
            <button onClick={handlerNext} disabled={disabledNext}>
              Next
            </button>
          </div>
          <span>
            стор. :
            <span className={css.active}>{`${numPage}/${lengthPages}`}</span>
          </span>
        </div>
        <div className={css.readerCard}>
          <h3 className={css.title}>{activePage.title}</h3>
          <p>{activePage.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Reader;
// {
//   "id": 17,
//   "title": "житловий ваучер",
//   "description": "- спеціальний платіжний документ певного номіналу в електронній формі, що формується і зберігається в Державному реєстрі майна, пошкодженого та знищеного внаслідок бойових дій, терористичних актів, диверсій, спричинених збройною агресією Російської Федерації проти України (далі - Реєстр пошкодженого та знищеного майна), який може бути спрямований на фінансування придбання об’єкта житлової нерухомості (у тому числі інвестування/фінансування його будівництва), земельної ділянки, на якій розташовано такий об’єкт, частки у праві власності на таке майно (у тому числі на сплату першого внеску/ погашення платежу за іпотечним кредитом);"
// }
