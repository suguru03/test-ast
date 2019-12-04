class Test {
  constructor() {
    this.num = 1;
    this.str = 'str';
  }
  getNum() {
    return this.num;
  }
  getStr() {
    return this.str;
  }
}

Test.num = 1;

/**
 * @param {number} a
 * @param {boolean} [b]
 * @param {string} [c]
 **/
function test(a, b, c = 1) {
  return 1;
}
