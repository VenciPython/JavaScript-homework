function tradeCommission(input) {
  let city = input[0];
  let numberOfSells = Number(input[1]);

  switch (city) {
    case "Sofia":
      if (numberOfSells >= 0 && numberOfSells <= 500) {
        let commissionPercent = 0.05 * numberOfSells;
        console.log(commissionPercent.toFixed(2));

      } else if (numberOfSells > 500 && numberOfSells <= 1000) {
        let commissionPercent = 0.07 * numberOfSells;
        console.log(commissionPercent.toFixed(2));

      } else if (numberOfSells > 1000 && numberOfSells <= 10000) {
        let commissionPercent = 0.08 * numberOfSells;
        console.log(commissionPercent.toFixed(2));

      } else if (numberOfSells > 10000) {
        let commissionPercent = 0.12 * numberOfSells;
        console.log(commissionPercent.toFixed(2));

      } else {
        console.log("error");
      }
      break;

    case "Varna":
      if (numberOfSells >= 0 && numberOfSells <= 500) {
        let commissionPercent = 0.045 * numberOfSells;
        console.log(commissionPercent.toFixed(2));

      } else if (numberOfSells > 500 && numberOfSells <= 1000) {
        let commissionPercent = 0.075 * numberOfSells;
        console.log(commissionPercent.toFixed(2));

      } else if (numberOfSells > 1000 && numberOfSells <= 10000) {
        let commissionPercent = 0.10 * numberOfSells;
        console.log(commissionPercent.toFixed(2));

      } else if (numberOfSells > 10000) {
        let commissionPercent = 0.13 * numberOfSells;
        console.log(commissionPercent.toFixed(2));

      } else {
        console.log("error");
      }
      break;

    case "Plovdiv":
      if (numberOfSells >= 0 && numberOfSells <= 500) {
        let commissionPercent = 0.055 * numberOfSells;
        console.log(commissionPercent.toFixed(2));

      } else if (numberOfSells > 500 && numberOfSells <= 1000) {
        let commissionPercent = 0.08 * numberOfSells;
        console.log(commissionPercent.toFixed(2));

      } else if (numberOfSells > 1000 && numberOfSells <= 10000) {
        let commissionPercent = 0.12 * numberOfSells;
        console.log(commissionPercent.toFixed(2));

      } else if (numberOfSells > 10000) {
        let commissionPercent = 0.145 * numberOfSells;
        console.log(commissionPercent.toFixed(2));

      } else {
        console.log("error");
      }
      break;
    default: console.log("error");
  }
}
//tradeCommission(["Kaspichan","-50"])

//tradeCommission(["Sofia","1500"])
