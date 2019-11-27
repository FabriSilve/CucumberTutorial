class Util {
  constructor() {
    this.num = 0;
  }

  add(x) {
    this.num = this.num + x;
  }

  result() {
    return this.num;
  }
}

module.exports = Util;
