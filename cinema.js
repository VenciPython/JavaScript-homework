function cinema(input) {
  let ticketType = input[0];
  let redove = Number(input[1]);
  let colum = Number(input[2]);
  let price = 0;

  switch (ticketType) {
    case "Premiere":
      price = 12;
      break;
    case "Normal":
      price = 7.50;
      break;
    case "Discount":
      price = 5;
      break;
  }

  let allPrice = (redove * colum) * price;
  console.log(`${allPrice.toFixed(2)} leva`);
}

//cinema(["Discount","12","30"])
