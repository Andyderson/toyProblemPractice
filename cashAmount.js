class CashAmount {
  constructor(cash) {
    this.cash = cash;
  }

  totalInPennies() {
    this.totalInPennies = this.cash * 100;
    return this.totalInPennies;
  }

  addDoubleAmount(amount) {
    this.cash = (amount * 100 + this.cash * 100) / 100;
  }

  quantityOfEachDenomination() {
    var results = {
      hundreds: "",
      fifties: "",
      twenties: "",
      tens: "",
      fives: "",
      ones: "",
      quarters: "",
      dimes: "",
      nickels: "",
      pennies: ""
    };

    var hundreds = this.cash / 100;
    results.hundreds = Math.trunc(hundreds);

    var fifties = this.cash - 100 * results.hundreds;
    var fiftiesStore = fifties / 50;
    results.fifties = Math.trunc(fiftiesStore);

    var twenties = this.cash - 100 * results.hundreds - results.fifties * 50;
    var twentiesStore = twenties / 20;
    results.twenties = Math.trunc(twentiesStore);

    var tens =
      this.cash -
      100 * results.hundreds -
      results.fifties * 50 -
      20 * results.twenties;
    var tensStore = tens / 10;
    results.tens = Math.trunc(tensStore);

    var fives =
      this.cash -
      100 * results.hundreds -
      results.fifties * 50 -
      20 * results.twenties -
      10 * results.tens;
    var fivesStore = fives / 5;
    results.fives = Math.trunc(fivesStore);

    var ones =
      this.cash -
      100 * results.hundreds -
      results.fifties * 50 -
      20 * results.twenties -
      10 * results.tens -
      5 * results.fives;
    var onesStore = ones / 1;
    results.ones = Math.trunc(onesStore);

    var quarters =
      this.cash -
      100 * results.hundreds -
      results.fifties * 50 -
      20 * results.twenties -
      10 * results.tens -
      5 * results.fives -
      results.ones;
    var quartersStore = quarters / 0.25;
    results.quarters = Math.trunc(quartersStore);

    var dimes =
      this.cash -
      100 * results.hundreds -
      results.fifties * 50 -
      20 * results.twenties -
      10 * results.tens -
      5 * results.fives -
      results.ones -
      results.quarters * 0.25;
    var dimesStore = dimes / 0.1;
    results.dimes = Math.trunc(dimesStore);

    var nickels =
      this.cash -
      100 * results.hundreds -
      results.fifties * 50 -
      20 * results.twenties -
      10 * results.tens -
      5 * results.fives -
      results.ones -
      results.quarters * 0.25 -
      0.1 * results.dimes;
    var nickelsStore = nickels / 0.05;
    results.nickels = Math.trunc(nickelsStore);

    var pennies =
      this.cash -
      100 * results.hundreds -
      results.fifties * 50 -
      20 * results.twenties -
      10 * results.tens -
      5 * results.fives -
      results.ones -
      results.quarters * 0.25 -
      0.1 * results.dimes -
      0.05 * results.nickels;
    var penniesStore = pennies / 0.01;
    results.pennies = Math.round(penniesStore);

    return results;
  }

  toDouble(amount) {
    return this.cash;
  }

  toDoubleString() {
    return JSON.stringify(this.cash);
  }
}

// var cash = new CashAmount(10.50);

// cash.totalInPennies(); // -> 1050

// cash.addDoubleAmount(29.33);
// cash.totalInPennies(); // -> 3983

// cash.addDoubleAmount(29.33);
// cash.toDouble(); // -> 39.83

// cash.addDoubleAmount(29.33);
// cash.toDoubleString(); // -> '39.83'

// var cash = new CashAmount(967.93);
// cash.quantityOfEachDenomination() // ->
// {
//   'hundreds': 9,
//   'fifties': 1,
//   'twenties': 0,
//   'tens': 1,
//   'fives': 1,
//   'ones': 2,
//   'quarters': 3,
//   'dimes': 1,
//   'nickels': 1,
//   'pennies': 3
// }

var cash = new CashAmount(0.1);
cash.addDoubleAmount(0.2);
console.log(cash.totalInPennies() === 30);
