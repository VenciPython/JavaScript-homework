function lunchTime(input) {
  let serialName = (input[0]);
  let episodeTime = Number(input[1]);
  let lunchBreak = Number(input[2]);

  let eatTime = 1 / 8 * lunchBreak;
  let restTime = 1 / 4 * lunchBreak;

  let timeLeft = lunchBreak - eatTime - restTime;

  if (timeLeft >= episodeTime) {
    console.log(`You have enough time to watch ${serialName} and left with ${Math.ceil(timeLeft - episodeTime)} minutes free time.`);
  } else {
    console.log(`You don't have enough time to watch ${serialName}, you need ${Math.ceil(episodeTime - timeLeft)} more minutes.`);
  }
}

//lunchTime(["Game of Thrones","60","96"])
//lunchTime(["Teen Wolf", "48","60"])
