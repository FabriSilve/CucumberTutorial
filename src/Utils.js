class Util {
  constructor(init = 0) {
    this.num = init;
  }

  add(x) {
    this.num = this.num + x;
  }

  times(x) {
    this.num = this.num * x;
  }

  result() {
    return this.num;
  }
}

module.exports = Util;
