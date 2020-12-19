import { PizzaTypes } from "../enums/pizzaTypes";
import { Pizza } from "./Pizza";
export abstract class PizzaStore {
  public abstract createPizza(type: PizzaTypes): Pizza;
}
