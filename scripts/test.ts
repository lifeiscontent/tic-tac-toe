import { GameTest } from "../src/Game.test";

function getClassMethodNames<C extends new (...args: any) => any>(
  Class: C
): (keyof InstanceType<C> | "constructor")[] {
  return Object.getOwnPropertyNames(Class.prototype);
}

function main(): void {
  for (const method of getClassMethodNames(GameTest)) {
    if (method === "SetUp" || method === "constructor") continue;

    const test = new GameTest();
    try {
      test.SetUp();
      test[method]();
    } catch (e) {
      console.error("%O", e);
      process.exit(1);
    }
  }
}

main();
