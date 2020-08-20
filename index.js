import { fifaData } from "./fifa.js";
console.log(fifaData);

console.log("its working");
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final*/
const homeTeam = fifaData.filter(function (item) {
  if (item.Year === 2014 && item.Stage === "Final") {
    console.log(item["Home Team Name"]);
  }
});

/*(b) Away Team name for 2014 world cup final*/

const awayTeam = fifaData.filter(function (item) {
  if (item.Year === 2014 && item.Stage === "Final") {
    console.log(item["Away Team Name"]);
  }
});

/*(c) Home Team goals for 2014 world cup final*/

const homeTeamGoals = fifaData.filter(function (item) {
  if (item.Year === 2014 && item.Stage === "Final") {
    console.log(item["Home Team Goals"]);
  }
});

/*(d) Away Team goals for 2014 world cup final*/

const awayTeamGoals = fifaData.filter(function (item) {
  if (item.Year === 2014 && item.Stage === "Final") {
    console.log(item["Away Team Goals"]);
  }
});

/*(e) Winner of 2014 world cup final */

const winner2014 = fifaData.filter(function (item) {
  if (item.Year === 2014 && item.Stage === "Final") {
    console.log(item["Win conditions"]);
  }
});

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
  return data.filter((item) => item.Stage === "Final");
}
console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(cb) {
  let years = cb.map((item) => item.Year);
  return years;
}

console.log(getYears(getFinals(fifaData)));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

function getWinners(cb) {
  let winners = [];

  cb.forEach(function (item) {
    if (item["Home Team Goals"] > item["Away Team Goals"]) {
      winners.push(item["Home Team Name"]);
    } else {
      winners.push(item["Away Team Name"]);
    }
  });
  return winners;
}
console.log(getWinners(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(cb, cb1) {
  let newArr = [];
  let countryWinner = cb(getFinals(fifaData));
  let countryYears = cb1(getFinals(fifaData));
  for (let i = 0; i < countryWinner.length; i++) {
    newArr.push(
      `In ${countryYears[i]}, ${countryWinner[i]} won the world cup!`
    );
  }
  return newArr;
}
console.log(getWinnersByYear(getWinners, getYears));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
  const homeAvg = data.reduce(function (acc, home) {
    return acc + home["Home Team Goals"] / data.length;
  }, 0);

  const awayAvg = data.reduce(function (acc, away) {
    return acc + away["Away Team Goals"] / data.length;
  }, 0);
}

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {
  /* code here */
}

getCountryWins();

/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {
  /* code here */
}

getGoals();

/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {
  /* code here */
}

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
