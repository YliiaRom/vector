import questions from "../helpers/tasks.json";
import QuestionsItem from "./QuestionsItem";
import css from "./Questions.module.css";
function QuestionsList() {
  return (
    <>
      <h2>Перевірка знань з теми «Податки»:</h2>
      {questions && (
        <ul className={css.listQuestions}>
          {questions.map((el, index) => (
            <li key={el.id}>
              <QuestionsItem dataQuestion={el} index={index} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default QuestionsList;
