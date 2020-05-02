# Dates Generator

A lightweight JavaScript date library to generate dates for a specific month and year.

This library is suitable to use to make a fully customizable date picker and calendar UI in javascript. (**React**, **Vue**, **Angular**, **React Native**, etc...)

---

## Installation
Using npm:

`npm install <github-link> --save`

Using yarn:

`yarn add <github-link>`

---

## How to use
### Using `datesGenerator(body)`

```
const { datesGenerator } = require('dates-generator');

const presentDay = new Date();
const year = presentDay.getFullYear();
const month = presentDay.getMonth();

const body = {
  year,
  month, // 0 - 11, 0 = Jan - 11 = Dec
  startingDay: 0, // starting day of the calendar, 0 = Sun - 6 = Sat, default is 0 if anything is not passed
};

const { dates, previousYear, previousMonth, nextYear, nextMonth }  = datesGenerator(body);

console.log(dates);

/*
  e.g
   - each array represent a week
   - each object represent a day
   - first object is sunday by default, you may pass in the startingDay attr if you wish to change
   - month 0 = jan - 11 = dec
  [
    [
      { date: 26, month: 3, year: 2020, jsDate: '26/04/2020, 00:00:00' },
      { date: 27, month: 3, year: 2020, jsDate: '27/04/2020, 00:00:00' },
      { date: 28, month: 3, year: 2020, jsDate: '28/04/2020, 00:00:00' },
      { date: 29, month: 3, year: 2020, jsDate: '29/04/2020, 00:00:00' },
      { date: 30, month: 3, year: 2020, jsDate: '30/04/2020, 00:00:00' },
      { date: 1, month: 4, year: 2020, jsDate: '01/05/2020, 00:00:00' },
      { date: 2, month: 4, year: 2020, jsDate: '02/05/2020, 00:00:00' }
    ],
    [...]
    [...]
    [...]
    ...
  ]
/*

/*
  Use previousMonth and previousYear to get the previous month date
  e.g.: datesGenerator({ year: previousYear, month: previousMonth })
*/

```

Request Object

Property | Type | Value | Description
------------ | ------------- | ------------- | -------------
month | number (default is present month) | 0 - 11 (0 = jan, 11 = dec) | To show dates from which month
year | number (default is present year) | e.g 2020 | To show dates from which year
startingDay | number (default is 0 = sunday) | 0 - 6 (0 = sunday, 6 = saturday) | Determine the starting day for the dates

---

### Using `daysInMonth(year, month)`

```
const { daysInMonth } = require('dates-generator');

const presentDay = new Date();
const year = presentDay.getFullYear();
const month = presentDay.getMonth();

const days = daysInMonth(year, month)
console.log(days) // 28 or 29 or 30 or 31
```

Requesting Parameters

Property | Type | Value 
------------ | ------------- | -------------
year | number (default is present month) | e.g 2020
month | number (default is present year) | 0 - 11 (0 = jan, 11 = dec)

---

### Using `yearsGenerator(from, to)`

```
const { yearsGenerator } = require('dates-generator');

const years = yearsGenerator(2015, 2020);

console.log(years); // [2015, 2016, 2017, 2018, 2019, 2020]
```

To generate the years the `from` parameters must not be greater than `to` parameters

Requesting Parameters

Property | Type | Value 
------------ | ------------- | -------------
from | number | e.g 2015
to | number | e.g 2020

## Contributing
Contributions are always open. There are still a lot more to do with this library, such as writing test and implementing type checking to the code.
