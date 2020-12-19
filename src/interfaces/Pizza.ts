export abstract class Pizza {
  public abstract name: string;
  public prepare() {
    console.log("prepare() - defalult way");
  }
  public bake() {
    console.log("bake() - defaule way");
  }
  public cut() {
    console.log("cut() - default way");
  }
  public box() {
    console.log("box() - default way");
  }
}
