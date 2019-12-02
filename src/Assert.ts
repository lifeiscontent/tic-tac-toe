export class Assert {
  static AreEqual<T>(left: T, right: T): void {
    if (left !== right)
      throw new Error(`Not Equal: { left: ${left}, right: ${right} }`);
  }
}
