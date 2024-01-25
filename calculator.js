let calculation= localStorage.getItem('calculation') || '';

displayCalculation();

function calculator(num){
  calculation += num;
  displayCalculation();

  localStorage.setItem('calculation', calculation);

}

function displayCalculation(){
  document.querySelector('.display-calculation')
    .innerHTML = calculation;
}
