window.addEventListener('load', colors);

function colors() {
  var red = document.querySelector('#redColor');
  var green = document.querySelector('#greenColor');
  var blue = document.querySelector('#blueColor');
  var inputRed = document.querySelector('.redNum');
  var inputGreen = document.querySelector('.greenNum');
  var inputBlue = document.querySelector('.blueNum');


  red.addEventListener('input', (event) => {
    inputRed.value = event.target.value;
    backgroundColor();
  });

  green.addEventListener('input', (event) => {
    inputGreen.value = event.target.value;
    backgroundColor();
  });

  blue.addEventListener('input', (event) => {
    inputBlue.value = event.target.value;
    backgroundColor();
  });

  function backgroundColor() {
    console.log(red.value, green.value, blue.value);
    document.getElementById('firstDiv').style.backgroundColor = 'rgb(' + red.value + ', ' + green.value + ', ' + blue.value + ')';
  }



}


// var bkg = document.getElementById('firstDiv').style.backgroundColor = 'rgb(' + red.value + ', ' + green.value + ', ' + blue.value + ')';
// console.log(bkg)



