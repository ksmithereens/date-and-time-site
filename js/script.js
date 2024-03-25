// Get link/button/toggle
// Get the <body>
const lightDark = document.querySelector('a');
const body = document.querySelector('body');

// SETTING

lightDark.addEventListener( 'click', () => {
  
  // Add 'dark' class
  body.classList.toggle('dark');
  //   Check check
  console.log("OK?");
  
})

const url = 'https://api.openweathermap.org/data/2.5/weather';
// const city = 'miami';
const zip = 99202;
const APIKEY = 'f2f85762267ef18d0df71e18ec9f3737';
const units = 'imperial';

// the data
const dataSource = `${url}?zip=${zip}&appid=${APIKEY}&units=${units}`;

// fetch it
fetch(dataSource)
  .then( response => response.json() )
  .then( myData => {
  
  // get stuff
  const body = document.querySelector('body');
  const h1 = document.querySelector('h1');
  const h2 = document.querySelector('h2');
 
  // template
  const template = `
      <h1> ${myData.main.temp} </h1>
      <h2> ${myData.name} </h2>
  `
  
  // display template
  body.insertAdjacentHTML( "afterbegin", template );
  
  
});