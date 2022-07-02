const getAmount = () => {
  fetch("./data.json")
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      const toolTip = [...document.querySelectorAll(".tooltip")];
      const tdStyle = [...document.querySelectorAll("td")];
      const summary = document.querySelector(".summary__item--second");
      let summaryamount = 0;
      for (let i = 0; i < toolTip.length; i++) {
        toolTip[i].textContent = data[i].amount;
        let columntValue = data[i].amount / 100;
        tdStyle[i].style = `--size: ${columntValue}`;
        summaryamount = summaryamount + data[i].amount;
      }
      summary.textContent = summaryamount;
    });
};

getAmount();
