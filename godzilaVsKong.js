function godzilaVsKong(input) {
  let budjet = Number(input[0]);
  let actors = Number(input[1]);
  let priceCostumPerActor = Number(input[2]);
  let decorePrice = 0.10 * budjet;

  if (actors > 150) {
    priceCostumPerActor -= (0.10 * priceCostumPerActor);
  }

  let allPrice = (priceCostumPerActor * actors) + decorePrice;
  if (budjet < allPrice) {
    let final = allPrice - budjet;
    console.log("Not enough money!");
    console.log(`Wingard needs ${final.toFixed(2)} leva more .`);
  } else {
    let final = budjet - allPrice;
    console.log(" Action!");
    console.log(`Wingard starts filming with ${final.toFixed(2)} leva left.`);
  }

}
//godzilaVsKong(["9587.88","222","55.68"])
