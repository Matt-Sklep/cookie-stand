'use strict';

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
/*-------------Seattle----------------*/
/*------------------------------------*/
let Seattle = {
  /*Declare our variables*/
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  avgCookies: function () {
    return Math.trunc(
      (Math.random() * (this.max - this.min + 1) + this.min) * this.avg
    );
  },
  totalCookies: 0,

  calculateHourlyValues: function () {
    /*Create an empty array to store our Hourly sales*/
    let hourlySales = [];
    /*For loop that generates a random hourly sale for each hour*/
    for (let i = 0; i < hoursOpen.length; i++) {
      let sales = this.avgCookies();
      hourlySales.push(`${hoursOpen[i]}: ${sales} cookies`);
      /*Add that hourly sale to the store's total sales value*/
      this.totalCookies += sales;
    }
    return hourlySales;
  },

  addListToHtml: function () {
    /*Invoke our 'calculateHourlyValues' function within this function*/
    let salesValues = this.calculateHourlyValues();
    let listContainer = document.getElementById(this.name);
    /*Create & display the store name.*/
    let containerName = document.createElement('p');
    containerName.textContent = this.name;
    listContainer.appendChild(containerName);
    /*Create an unordered list.*/
    let newList = document.createElement('ul');
    listContainer.appendChild(newList);
    /*For loop to add each sale as a 'li' element to our unordered list*/
    for (let sale of salesValues) {
      let listItem = document.createElement('li');
      listItem.textContent = sale;
      newList.appendChild(listItem);
    }
    /*Adds the total at the end of the list.*/
    let listItem = document.createElement('li');
    listItem.textContent = `Total: ${this.totalCookies} cookies`;
    newList.appendChild(listItem);
  },
};
/*------------------------------------*/
/*--------------Tokyo-----------------*/
/*------------------------------------*/
let Tokyo = {
  /*Declare up our variables*/
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  avgCookies: function () {
    return Math.trunc(
      (Math.random() * (this.max - this.min + 1) + this.min) * this.avg
    );
  },
  totalCookies: 0,

  calculateHourlyValues: function () {
    /*Create an empty array to store our Hourly sales*/
    let hourlySales = [];
    /*For loop that generates a random hourly sale for each hour*/
    for (let i = 0; i < hoursOpen.length; i++) {
      let sales = this.avgCookies();
      hourlySales.push(`${hoursOpen[i]}: ${sales} cookies`);
      /*Add that hourly sale to the store's total sales value*/
      this.totalCookies += sales;
    }
    return hourlySales;
  },

  addListToHtml: function () {
    /*Invoke our 'calculateHourlyValues' function within this function*/
    let salesValues = this.calculateHourlyValues();
    let listContainer = document.getElementById(this.name);
    /*Create & display the store name.*/
    let containerName = document.createElement('p');
    containerName.textContent = this.name;
    listContainer.appendChild(containerName);
    /*Create an unordered list.*/
    let newList = document.createElement('ul');
    listContainer.appendChild(newList);
    /*For loop to add each sale as a 'li' element to our unordered list*/
    for (let sale of salesValues) {
      let listItem = document.createElement('li');
      listItem.textContent = sale;
      newList.appendChild(listItem);
    }
    /*Adds the total at the end of the list.*/
    let listItem = document.createElement('li');
    listItem.textContent = `Total: ${this.totalCookies} cookies`;
    newList.appendChild(listItem);
  },
};
/*------------------------------------*/
/*--------------Dubai-----------------*/
/*------------------------------------*/
let Dubai = {
  /*Declare our variables*/
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  avgCookies: function () {
    return Math.trunc(
      (Math.random() * (this.max - this.min + 1) + this.min) * this.avg
    );
  },
  totalCookies: 0,

  calculateHourlyValues: function () {
    /*Create an empty array to store our Hourly sales*/
    let hourlySales = [];
    /*For loop that generates a random hourly sale for each hour*/
    for (let i = 0; i < hoursOpen.length; i++) {
      let sales = this.avgCookies();
      hourlySales.push(`${hoursOpen[i]}: ${sales} cookies`);
      /*Add that hourly sale to the store's total sales value*/
      this.totalCookies += sales;
    }
    return hourlySales;
  },

  addListToHtml: function () {
    /*Invoke our 'calculateHourlyValues' function within this function*/
    let salesValues = this.calculateHourlyValues();
    let listContainer = document.getElementById(this.name);
    /*Create & display the store name.*/
    let containerName = document.createElement('p');
    containerName.textContent = this.name;
    listContainer.appendChild(containerName);
    /*Create an unordered list.*/
    let newList = document.createElement('ul');
    listContainer.appendChild(newList);
    /*For loop to add each sale as a 'li' element to our unordered list*/
    for (let sale of salesValues) {
      let listItem = document.createElement('li');
      listItem.textContent = sale;
      newList.appendChild(listItem);
    }
    /*Adds the total at the end of the list.*/
    let listItem = document.createElement('li');
    listItem.textContent = `Total: ${this.totalCookies} cookies`;
    newList.appendChild(listItem);
  },
};
/*------------------------------------*/
/*--------------Paris-----------------*/
/*------------------------------------*/
let Paris = {
  /*Declare our variables*/
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  avgCookies: function () {
    return Math.trunc(
      (Math.random() * (this.max - this.min + 1) + this.min) * this.avg
    );
  },
  totalCookies: 0,

  calculateHourlyValues: function () {
    /*Create an empty array to store our Hourly sales*/
    let hourlySales = [];
    /*For loop that generates a random hourly sale for each hour*/
    for (let i = 0; i < hoursOpen.length; i++) {
      let sales = this.avgCookies();
      hourlySales.push(`${hoursOpen[i]}: ${sales} cookies`);
      /*Add that hourly sale to the store's total sales value*/
      this.totalCookies += sales;
    }
    return hourlySales;
  },

  addListToHtml: function () {
    /*Invoke our 'calculateHourlyValues' function within this function*/
    let salesValues = this.calculateHourlyValues();
    let listContainer = document.getElementById(this.name);
    /*Create & display the store name.*/
    let containerName = document.createElement('p');
    containerName.textContent = this.name;
    listContainer.appendChild(containerName);
    /*Create an unordered list.*/
    let newList = document.createElement('ul');
    listContainer.appendChild(newList);
    /*For loop to add each sale as a 'li' element to our unordered list*/
    for (let sale of salesValues) {
      let listItem = document.createElement('li');
      listItem.textContent = sale;
      newList.appendChild(listItem);
    }
    /*Adds the total at the end of the list.*/
    let listItem = document.createElement('li');
    listItem.textContent = `Total: ${this.totalCookies} cookies`;
    newList.appendChild(listItem);
  },
};
/*------------------------------------*/
/*---------------Lima-----------------*/
/*------------------------------------*/
let Lima = {
  /*Declare our variables*/
  name: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  avgCookies: function () {
    return Math.trunc(
      (Math.random() * (this.max - this.min + 1) + this.min) * this.avg
    );
  },
  totalCookies: 0,

  calculateHourlyValues: function () {
    /*Create an empty array to store our Hourly sales*/
    let hourlySales = [];
    /*For loop that generates a random hourly sale for each hour*/
    for (let i = 0; i < hoursOpen.length; i++) {
      let sales = this.avgCookies();
      hourlySales.push(`${hoursOpen[i]}: ${sales} cookies`);
      /*Add that hourly sale to the store's total sales value*/
      this.totalCookies += sales;
    }
    return hourlySales;
  },

  addListToHtml: function () {
    /*Invoke our 'calculateHourlyValues' function within this function*/
    let salesValues = this.calculateHourlyValues();
    let listContainer = document.getElementById(this.name);
    /*Create & display the store name.*/
    let containerName = document.createElement('p');
    containerName.textContent = this.name;
    listContainer.appendChild(containerName);
    /*Create an unordered list.*/
    let newList = document.createElement('ul');
    listContainer.appendChild(newList);
    /*For loop to add each sale as a 'li' element to our unordered list*/
    for (let sale of salesValues) {
      let listItem = document.createElement('li');
      listItem.textContent = sale;
      newList.appendChild(listItem);
    }
    /*Adds the total at the end of the list.*/
    let listItem = document.createElement('li');
    listItem.textContent = `Total: ${this.totalCookies} cookies`;
    newList.appendChild(listItem);
  },
};

/*Invoke the functions to generate the values onto the HTML*/
Seattle.addListToHtml();
Tokyo.addListToHtml();
Dubai.addListToHtml();
Paris.addListToHtml();
Lima.addListToHtml();
