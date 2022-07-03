fetch("./data.json")
  .then((data) => data.json())
  .then((data) => {
    const amountReturn = getAmount(data);
  });

const getAmount = (amountData) => {
  const toolTip = [...document.querySelectorAll(".tooltip")];
  const tdStyle = [...document.querySelectorAll("td")];
  const summary = document.querySelector(".summary__item--second");
  let summaryamount = 0;
  for (let i = 0; i < toolTip.length; i++) {
    toolTip[i].textContent = amountData[i].amount;
    console.log(amountData[i]);
    let columntValue = amountData[i].amount / 100;
    tdStyle[i].style = `--size: ${columntValue}`;
    summaryamount = summaryamount + amountData[i].amount;
  }
  summary.textContent = summaryamount;
};

getAmount();
