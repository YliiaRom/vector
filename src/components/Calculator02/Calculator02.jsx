import css from "./Calculator02.module.css";
import { useState } from "react";

function Calculator02() {
  const [appraisal, setAppraisal] = useState(0);
  const [appraisalCost, setAppraisalCost] = useState(1000);
  const [prise, setPrise] = useState(0);
  const [notaryTotal, setNotaryTotal] = useState(12000);
  const [percentBayer, setPercentBayer] = useState(2);
  const [percentSeller, setPercentSeller] = useState(2);
  const [rate, setRate] = useState("");
  const [exchangeRateRun, setExchangeRateRun] = useState(false);

  const handlerPriceChange = (e) => {
    const val = e.target.value;
    setPrise(val);
  };
  const handlerAppraisalChange = (e) => {
    const val = e.target.value;
    setAppraisal(val);
  };
  const handlerAppraisalCostChange = (e) => {
    const val = e.target.value;
    setAppraisalCost(val);
  };
  const handlerNotarySumChange = (e) => {
    const val = e.target.value;
    setNotaryTotal(val);
  };
  const handlerPercentBayerChange = (e) => {
    const val = e.target.value;
    setPercentBayer(val);
  };
  const handlerPercentSellerChange = (e) => {
    const val = e.target.value;
    setPercentSeller(val);
  };
  const handlerRateChange = (e) => {
    const val = e.target.value;
    setRate(val);
  };

  const handlerExchangeRate = () => {
    setExchangeRateRun(true);
  };

  const normalizedAppraisal = Number(appraisal) || 0;

  const normalizedAppraisalCost = Number(appraisalCost) || 0;
  const normalizedPrice = Number(prise) || 0;
  const normalizedPersentBayer = Number(percentBayer) || 0;
  const normalizedPersentSeller = Number(percentSeller) || 0;
  const normalizedRate = Number(rate) || 0;

  const pensionTax = normalizedAppraisal * 0.01;
  const stateDuty = normalizedAppraisal * 0.01;

  const notaryBuyer = notaryTotal / 2;
  const notarySeller = notaryTotal / 2;

  const realtorPriceBayer = normalizedPrice * (normalizedPersentBayer / 100);
  const realtorPriceSeller = normalizedPrice * (normalizedPersentSeller / 100);
  const sumParsent = normalizedPersentBayer + normalizedPersentSeller;
  console.log("Calculator01");

  // ----------sum
  const totalSumSeller = stateDuty + normalizedAppraisalCost + notarySeller;
  const totalSumBayer = pensionTax + notaryBuyer;
  const convertationSumRealtorSeller = realtorPriceSeller * normalizedRate;
  const convertationSumRealtorBayer = realtorPriceBayer * normalizedRate;

  const totalSumSellerUAH = totalSumSeller + convertationSumRealtorSeller;
  const totalSumBayerUAH = totalSumBayer + convertationSumRealtorBayer;
  return (
    <div className={css.box}>
      <h2>Розрахунок податків при купівлі квартри</h2>
      {/* ----inputs-- */}
      <div className={css.inputsList}>
        <label>
          Ціна квартири (в доларах)
          <input
            type="number"
            value={prise}
            onChange={(e) => handlerPriceChange(e)}
          />
        </label>
        <label>
          Оціночна вартість квартири (грн.)
          <input
            type="number"
            value={appraisal}
            onChange={(e) => handlerAppraisalChange(e)}
          />
        </label>
        <label>
          Послуга оцінки квартири
          <input
            type="number"
            value={appraisalCost}
            onChange={(e) => handlerAppraisalCostChange(e)}
          />
        </label>
        {/* --------rieltor */}
        <label>
          Введіть відсоток комісії рієлтора для покупця (% від ціни квартири)
          <input
            type="number"
            value={percentBayer}
            onChange={(e) => handlerPercentBayerChange(e)}
          />
        </label>
        <label>
          Введіть відсоток комісії рієлтора для продавця (% від ціни квартири)
          <input
            type="number"
            value={percentSeller}
            onChange={(e) => handlerPercentSellerChange(e)}
          />
        </label>
        {/* --------notary- */}
        <label>
          Послуги нотаріуса (грн.)
          <input
            type="number"
            value={notaryTotal}
            onChange={(e) => handlerNotarySumChange(e)}
          />
        </label>
      </div>
      {/* --result-- */}
      <div className={css.description}>
        <p>{`Податок у Пенсійний фонд (1%-від оціночної вартості квартири): ${pensionTax}грн.`}</p>
        <p>{`Податок - Державне мито (1%-від оціночної вартості квартири): ${stateDuty}грн.`}</p>
        <p>{`Послуга оцінки квартири : ${appraisalCost}грн.`}</p>
        <p>{`Послуги нотаріуса (Загальна сумма = ${notaryTotal}грн.): покупцю : ${notaryBuyer.toFixed(2)}грн/ продавцю :${notarySeller.toFixed(2)}грн`}</p>
        <p>{`Як правило, оплата послуг рієлтора становить ${sumParsent}% від вартості квартири.`}</p>
        <p>{`Послуги рієлтора ${percentBayer}% для покупця: ${realtorPriceBayer}$`}</p>
        <p>{`Послуги рієлтора ${percentSeller}% для продавця: ${realtorPriceSeller}$`}</p>
      </div>

      <hr />
      {/* -------sum----- */}
      <div className={css.resultBox}>
        <div>
          <h3>Податки продавця:</h3>
          <p>{` ${stateDuty}грн. (Податок - Державне мито) + ${appraisalCost}грн.(Послуга оцінки квартири) +${notarySeller}грн.(Послуги нотаріуса) + ${realtorPriceSeller}$(Послуги рієлтора)  
       `}</p>
          <p>{`   = ${totalSumSeller}грн +  ${realtorPriceSeller}$ `}</p>
          <div>
            {exchangeRateRun && (
              <p>{`= ${totalSumSeller}грн + ${convertationSumRealtorSeller.toFixed(2)}грн. = ${totalSumSellerUAH}грн.`}</p>
            )}
          </div>
        </div>
        <div>
          <label className={css.boxRate}>
            Введіть курс валюти для розрахунку загальної суми в гривнях
            <input
              type="number"
              value={rate}
              onChange={(e) => handlerRateChange(e)}
            />
          </label>
          <button onClick={handlerExchangeRate}>
            Розрахувати загальну суму в гривнях
          </button>
        </div>

        <div>
          <h3>Податки покупця:</h3>
          <p>{`${pensionTax}грн.(Податок у Пенсійний фонд) + ${notaryBuyer}грн.(Послуги нотаріуса) + ${realtorPriceBayer}$(Послуги рієлтора) `}</p>
          <p>{`   = ${totalSumBayer}грн +  ${realtorPriceBayer}$`}</p>
          {exchangeRateRun && (
            <p>{`= ${totalSumBayer}грн + ${convertationSumRealtorBayer.toFixed(2)}грн.=  ${totalSumBayerUAH}грн.`}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Calculator02;
