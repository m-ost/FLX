var amount = prompt('Please enter an amount:');
var discount = prompt('Please enter a discount:');
if (amount >= 0 && discount >= 0 && amount <= 9999999 && discount <= 99) {
    var price = Math.floor((amount - amount * discount / 100) * 100) / 100;
    var difference = Math.floor((amount - price) * 100) / 100;
    alert('Price without discount: ' + amount + '\n' + 'Discount: ' + discount + '\n' +
        'Price with discount: ' + price + '\n' + 'Saved: ' + difference);
} else {
    alert('Invalid input data');
}
