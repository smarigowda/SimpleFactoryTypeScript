export abstract class Pizza {
  abstract name: string;
  prepare() {
    console.log("prepare() - defalult way");
  }
  bake() {
    console.log("bake() - defaule way");
  }
  cut() {
    console.log("cut() - default way");
  }
  box() {
    console.log("box() - default way");
  }
}
