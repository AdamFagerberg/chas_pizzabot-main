const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//Put your Javscript code here:

alert(
  "Hey! Happy to serve your pizza. On our menu we have " +
    vegetarian +
    ", " +
    hawaiian +
    " and " +
    pepperoni
);

let orderName = prompt("Enter the name of the pizza you want to order today.");

let orderQuantity = "";

function checkOrderName(orderName) {
  if (
    orderName == vegetarian ||
    orderName == hawaiian ||
    orderName == pepperoni
  ) {
    return true;
  }
}

if ((checkOrderName = true)) {
  orderQuantity = prompt("How many of " + orderName + " do you want?");
} else {
  prompt("That pizza is not on our menu");
}

function totalCost(orderQuantity) {
  return orderQuantity * 80;
}

function cookingTime(orderQuantity) {
  if (orderQuantity < 3) {
    return "The pizzas will take 10 minutes.";
  } else if (orderQuantity < 6) {
    return "The pizzas will take 15 minutes.";
  } else {
    return "The pizzas will take 20 minutes.";
  }
}

alert(
  "Great I'll get started on your " +
    orderName +
    " right away, it will cost " +
    totalCost(orderQuantity) +
    "kr." +
    cookingTime(orderQuantity)
);
