import { PizzaTypes } from "./enums/pizzaTypes";
import { SimplePizzaFactory } from "./factory/SimplePizzaFactory";
import { Pizza } from "./interfaces/Pizza";

console.log("Hello, welcome to Simple Pizza Factory !!!");
let pizza: Pizza;

const factory = new SimplePizzaFactory();

pizza = factory.createPizza(PizzaTypes.Cheese);
console.log(pizza.name);

pizza = factory.createPizza(PizzaTypes.Clam);
console.log(pizza.name);

pizza = factory.createPizza(PizzaTypes.Veggie);
console.log(pizza.name);

pizza = factory.createPizza(PizzaTypes.Pepperoni);
console.log(pizza.name);
