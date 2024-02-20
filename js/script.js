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
  
});