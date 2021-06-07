# dates-generator

[![npm](https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/70px-Npm-logo.svg.png)](https://www.npmjs.com/package/dates-generator?activeTab=versions)

A lightweight JavaScript date library to generate dates for a specific month and year.

This library is suitable to use to make a fully customizable date picker and calendar UI in javascript. (**React**, **Vue**, **Angular**, **React Native**, etc...)

---

## Installation
Using npm:

```
npm install dates-generator --save
```

Using yarn:

```
yarn add dates-generator
```

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
      { date: 26, month: 3, year: 2020 },
      { date: 27, month: 3, year: 2020 },
      { date: 28, month: 3, year: 2020 },
      { date: 29, month: 3, year: 2020 },
      { date: 30, month: 3, year: 2020 },
      { date: 1, month: 4, year: 2020 },
      { date: 2, month: 4, year: 2020 }
    ],
    [...]
    [...]
    [...]
    ...
  ]
/*

```

usage of `previousMonth / nextMonth` and `previousYear / nextYear` to get the previous/next month date

```
datesGenerator({ year: previousYear, month: previousMonth })
```

You can use all three property (`date`, `month`, `year`) to format the date using `new Date()`, example:

```
  const formatDate = new Date(year, month, date).toString()
```

You may also use [date-and-time](https://github.com/knowledgecode/date-and-time) or [momentjs](https://momentjs.com/) to format the date using the `date`, `month`, `year`.

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

---

## Contributing
Contributions are always open. There are still a lot more to improve with this library.

such as:
- writing test cases
- implementing type checking
- error handling
