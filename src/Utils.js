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

  asyncSubtract(x) {
    const self = this;
    return new Promise(function (resolve) {
      setTimeout(() => {
        self.num = self.num - parseInt(x);
        resolve('Done');
      }, 20)
    })
  }

  result() {
    return this.num;
  }
}

module.exports = Util;
