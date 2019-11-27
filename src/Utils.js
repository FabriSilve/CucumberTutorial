class Util {
  constructor(init = 0) {
    this.num = parseInt(init);
  }

  add(x) {
    this.num = this.num + parseInt(x);
  }

  times(x) {
    this.num = this.num * parseInt(x);
  }

  result() {
    return this.num;
  }
}

module.exports = Util;
