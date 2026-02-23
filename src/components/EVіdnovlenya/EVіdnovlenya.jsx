import css from "./EVіdnovlenya.module.css";
function EVіdnovlenya() {
  return (
    <>
      <div className={css.box}>
        <h2>еВідновлення</h2>
        <h3>ПОСТАНОВА від 21 квітня 2023 р. № 381</h3>
        <p>
          Про затвердження Порядку надання компенсації для відновлення окремих
          категорій об`єктів нерухомого майна, пошкоджених внаслідок бойових
          дій, терористичних актів, диверсій, спричинених збройною агресією
          Російської Федерації, з використанням електронної публічної послуги
          "єВідновлення"
        </p>
        <button>
          <a
            href="https://erecovery.diia.gov.ua/destroyed.html"
            target="_blank"
          >
            Офіційний сайт програми єВідновлення (Дія)
          </a>
        </button>

        <h3>КАБІНЕТ МІНІСТРІВ УКРАЇНИ ПОСТАНОВА від 30 травня 2023 р. № 600</h3>
        <button>
          <a
            href="https://zakon.rada.gov.ua/laws/show/600-2023-%D0%BF#Text"
            target="_blank"
          >
            посилання на постанову № 600 (єВідновлення)
          </a>
        </button>

        <h3>еОселя</h3>
        <button>
          <a href="https://ukrfinzhytlo.in.ua/e-oselia/" target="_blank">
            посилання на программу іпотечного кредитування житла (єОселя)
          </a>
        </button>
      </div>
    </>
  );
}

export default EVіdnovlenya;
