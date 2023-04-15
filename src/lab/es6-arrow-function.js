function square (x) {
  return x * x;
}
console.log(square(3));

const squareArrow = (x) => {
  return x * x;
}
console.log(squareArrow(3));
console.log(((x) => {
  return x * x;
})(3));

const squareArrow2 = (x) => x * x;
console.log(squareArrow2(3));
console.log(((x) => x * x)(3));
