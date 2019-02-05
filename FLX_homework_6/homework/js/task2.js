let amount = Number(prompt('Please enter an amount:'));
let discount = Number(prompt('Please enter a discount:'));
if(amount >= 0 && discount >= 0 && amount <= 9999999 && discount <= 99){
  let price = parseFloat((amount - amount * discount / 100).toFixed(2));
  let difference = parseFloat((amount - price).toFixed(2));
  alert('Price without discount: '+amount+'\n'+'Discount: '+discount+'\n'+
  'Price with discount: '+price+'\n'+'Saved: '+difference);
} else {
  alert('Invalid input data');
}
