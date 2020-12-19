import { Pizza } from "./Pizza";
export abstract class PizzaStore {
  abstract createPizza(type: string): Pizza;
}
