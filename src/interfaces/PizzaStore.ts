import { PizzaTypes } from "../enums/pizzaTypes";
import { Pizza } from "./Pizza";
export abstract class PizzaStore {
  abstract createPizza(type: PizzaTypes): Pizza;
}
