import css from "./Acordion.module.css";
import listQuestions from "../helpers/vaucher.json";
import { memo, useState } from "react";
function Acordion() {
  const [activeIndex, setActiveIndex] = useState(1);

  let openingIndex = -1;

  function handlerChangeIndex(numIndex) {
    console.log(numIndex);
    openingIndex = activeIndex === numIndex ? -1 : numIndex;
    setActiveIndex(openingIndex);
  }
  console.log("acordion");
  return (
    <>
      <div className={css.sectoin}>
        <div>
          <h2>Питання/Відповіді по темі Ваучерів</h2>
          <ul>
            {listQuestions.map((el, index) => {
              return (
                <li key={index} className={css.item}>
                  <button
                    onClick={() => handlerChangeIndex(index)}
                  >{`${index + 1}) ${el.title}`}</button>
                  {activeIndex === index && (
                    <div className={css.description}>{el.description}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default memo(Acordion);
// {
//   "id": 17,
//   "title": "житловий ваучер",
//   "description": "- спеціальний платіжний документ певного номіналу в електронній формі, що формується і зберігається в Державному реєстрі майна, пошкодженого та знищеного внаслідок бойових дій, терористичних актів, диверсій, спричинених збройною агресією Російської Федерації проти України (далі - Реєстр пошкодженого та знищеного майна), який може бути спрямований на фінансування придбання об’єкта житлової нерухомості (у тому числі інвестування/фінансування його будівництва), земельної ділянки, на якій розташовано такий об’єкт, частки у праві власності на таке майно (у тому числі на сплату першого внеску/ погашення платежу за іпотечним кредитом);"
// }
