'use strict';

let allStores = [];
/*Universal hours open across all our stores*/
let hoursOpen = [
  '6:00am',
  '7:00am',
  '8:00am',
  '9:00am',
  '10:00am',
  '11:00am',
  '12:00pm',
  '1:00pm',
  '2:00pm',
  '3:00pm',
  '4:00pm',
  '5:00pm',
  '6:00pm',
  '7:00pm',
];

/*------------------------------------*/
/*---------Store Constructor----------*/
/*------------------------------------*/
function StoreConstructor(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.hourlyCookies = [];
  this.storeTotal = 0;
  this.createTable();
  allStores.push(this);
}
/*------------------------------------*/
/*------------RNG Function------------*/
/*------------------------------------*/
function avgCookies(min, max) {
  return Math.trunc(Math.random() * (max - min + 1)) + min;
}
/*------------------------------------*/
/*-------Hourly Cookie Function-------*/
/*------------------------------------*/
StoreConstructor.prototype.calculateHourlyValues = function () {
  for (let i = 0; i < hoursOpen.length; i++) {
    let rngNum = avgCookies(this.min, this.max);
    let cookiesPerHour = Math.trunc(rngNum * this.avg);
    this.hourlyCookies.push(cookiesPerHour);
    this.storeTotal += cookiesPerHour;
  }
};
/*------------------------------------*/
/*---------Table Data Function--------*/
/*------------------------------------*/
StoreConstructor.prototype.createTable = function () {
  this.calculateHourlyValues();
  let section = document.querySelector('tbody');
  let head = document.createElement('th');
  let row = document.createElement('tr');
  head.textContent = this.name;
  row.appendChild(head);
  section.appendChild(row);
  for (let i = 0; i < this.hourlyCookies.length; i++) {
    let cell = document.createElement('td');
    row.appendChild(cell);
    cell.textContent = this.hourlyCookies[i];
  }
  let cellTotal = document.createElement('td');
  row.appendChild(cellTotal);
  cellTotal.textContent = this.storeTotal;
};
/*------------------------------------*/
/*--------Table Header Function-------*/
/*------------------------------------*/
let createHeader = function () {
  let section = document.querySelector('thead');
  let head = document.createElement('th');
  let row = document.createElement('tr');
  head.textContent = '';
  row.appendChild(head);
  section.appendChild(row);

  for (let i = 0; i < hoursOpen.length; i++) {
    let cell = document.createElement('th');
    cell.textContent = hoursOpen[i];
    row.appendChild(cell);
  }
  let headerTotal = document.createElement('th');
  headerTotal.textContent = 'Total';
  row.appendChild(headerTotal);
};
/*------------------------------------*/
/*--------Table Footer Function-------*/
/*------------------------------------*/
let createFooter = function () {
  let section = document.querySelector('tfoot');
  let head = document.createElement('th');
  let row = document.createElement('tr');
  head.textContent = 'Total';
  row.appendChild(head);
  section.appendChild(row);
  for (let i = 0; i < hoursOpen.length; i++) {
    let salesAtHour = 0;
    let cell = document.createElement('td');
    for (let j = 0; j < allStores.length; j++) {
      let currentStore = allStores[j];
      let currentSales = currentStore.hourlyCookies[i];
      salesAtHour += currentSales;
    }
    cell.textContent = salesAtHour;
    row.append(cell);
  }
  let cell = document.createElement('td');
  let grandTotal = 0;
  for (let i = 0; i < allStores.length; i++) {
    grandTotal += parseInt(allStores[i].storeTotal);
  }
  cell.textContent = grandTotal;
  row.appendChild(cell);
};
/*------------------------------------*/
/*---------Invoking Our Table---------*/
/*------------------------------------*/
createHeader();
new StoreConstructor('Seattle', 23, 65, 6.3);
new StoreConstructor('Tokyo', 3, 24, 1.2);
new StoreConstructor('Dubai', 11, 38, 3.7);
new StoreConstructor('Paris', 20, 38, 2.3);
new StoreConstructor('Lima', 2, 16, 4.6);
createFooter();
