<<<<<<< HEAD
function getShippingMessage(country, price, deliveryFee) {
  const totalPrice = price + deliveryFee;
=======
function getShippingMessage(country, price, deliveryFree) {
  const totalPrice = price + deliveryFree;
>>>>>>> 39c77d7914b43b60c785fe04e7fa4981617d090a
  return `Shipping to ${country} will cost ${totalPrice} credits`;
}

console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"
