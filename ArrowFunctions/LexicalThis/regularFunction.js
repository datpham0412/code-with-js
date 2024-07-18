function Person() {
  this.age = 0;
  const self = this; // Capture the 'this value'
  setInterval(function () {
    self.age++;
    console.log(self.age);
  }, 1000);
}

const p = new Person();
