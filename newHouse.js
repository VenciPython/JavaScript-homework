function newHouse(input) {

  let typeFlower = input[0];
  let numberFlower = Number(input[1]);
  let budjet = Number(input[2]);
  let price = 0;

  switch (typeFlower) {
    case "Roses": price = 5 * numberFlower; break;
    case "Dahlias": price = 3.80 * numberFlower; break;
    case "Tulips": price = 2.80 * numberFlower; break;
    case "Narcissus": price = 3 * numberFlower; break;
    case "Gladiolus": price = 2.50 * numberFlower; break;
  }

  if (numberFlower > 90 && typeFlower === "Dahlias") {
    price *= 0.85;
  } else if (numberFlower > 80 && typeFlower === "Tulips") {
    price *= 0.85;
  } else if (numberFlower < 120 && typeFlower === "Narcissus") {
    price = (price * 0.15) + price;
  } else if (numberFlower < 80 && typeFlower === "Gladiolus") {
    price = (price * 0.20) + price;

  } else if (numberFlower > 80 && typeFlower === "Roses") {
    price *= 0.90;
  }

  if (budjet < price) {
    finalSum = ((price - budjet).toFixed(2));
    console.log(`Not enough money, you need ${finalSum} leva more.`);
  } else if (budjet >= price) {
    finalSum = ((budjet - price).toFixed(2));
    console.log(`Hey, you have a great garden with ${numberFlower} ${typeFlower} and ${finalSum} leva left.`);
  }
}
//newHouse(["Roses","55","250"])
