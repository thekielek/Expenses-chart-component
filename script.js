fetch("./data.json")
  .then((data) => data.json())
  .then((data) => {
    const amountReturn = getAmount(data);
  });

const getAmount = (amountData) => {
  const toolTips = [...document.querySelectorAll(".tooltip")];
  const tdStyles = [...document.querySelectorAll("td")];
  const summary = document.querySelector(".summary__item--second");
  let summaryAmount = 0;

  // for (let i = 0; i < toolTip.length; i++) {
  //   toolTip[i].textContent = amountData[i].amount;
  //   console.log(amountData[i]);
  //   let columntValue = amountData[i].amount / 100;
  //   tdStyle[i].style = `--size: ${columntValue}`;
  //   summaryamount = summaryamount + amountData[i].amount;
  // }

  toolTips.forEach((toolTip, i) => {
    toolTip.textContent = amountData[i].amount;
    console.log(amountData[i].amount);
    let columntValue = amountData[i].amount / 100;
    tdStyles[i].style = `--size: ${columntValue}`;
    summaryAmount = summaryAmount + amountData[i].amount;
  });

  summary.textContent = summaryAmount;
};
