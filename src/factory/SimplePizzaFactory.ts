import { PizzaTypes } from "../enums/pizzaTypes";
import { Pizza } from "../interfaces/Pizza";
import { CheesePizza } from "../pizas/CheesePizza";
import { ClamPzza } from "../pizas/ClamPizza";
import { PepperoniPizza } from "../pizas/PepperoniPizza";
import { VeggiePizza } from "../pizas/VeggiePizza";
export class SimplePizzaFactory {
  createPizza(type: PizzaTypes): Pizza {
    if (type === PizzaTypes.Cheese) {
      return new CheesePizza();
    } else if (type === PizzaTypes.Clam) {
      return new ClamPzza();
    } else if (type === PizzaTypes.Pepperoni) {
      return new PepperoniPizza();
    } else if (type === PizzaTypes.Veggie) {
      return new VeggiePizza();
    }
    throw new Error("Invalid Pizza type");
  }
}
