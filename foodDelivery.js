function foodDelivery(input) {

  let chicken = Number(input[0]) * 10.35;
  let fish = Number(input[1]) * 12.40;
  let vegetarian = Number(input[2]) * 8.15;
  let allPrice = chicken + fish + vegetarian;
  let desert = (20 / 100) * allPrice;
  let delivery = 2.50;

  let finalPrice = allPrice + desert + delivery;
  console.log(finalPrice);

}
//foodDelivery(["2 ","4 ","3 "])
