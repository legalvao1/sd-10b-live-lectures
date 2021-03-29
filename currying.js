const discount = (discount) => {
  return (price) => {
    return price * discount;
  }
};

const price = 500;

const finalPrice = price - discount(0.10)(price);

console.log(finalPrice);