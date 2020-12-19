import { Pizza } from "../interfaces/Pizza";
import { CheesePizza } from "../pizas/CheesePizza";

export class SimplePizzaFactory {
  createPizza(type: string): Pizza {
    if (type === "Cheese") {
      return new CheesePizza();
    }
  }
}
