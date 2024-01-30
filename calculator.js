// getting the stored value if it is not there then we assigne a empty string
let calculation= localStorage.getItem('calculation') || '';

displayCalculation();

// adding the character to calculation variable
function calculator(num){
  calculation += num;
  displayCalculation();

  localStorage.setItem('calculation', calculation);

}

function displayCalculation(){
  document.querySelector('.display-calculation')
    .innerHTML = calculation;
}

const deleteElement = document.querySelector('.erase');

deleteElement.addEventListener('click', () => {
  calculation = calculation.slice(0, -1);
  displayCalculation();
  localStorage.setItem('calculation', calculation);
});
