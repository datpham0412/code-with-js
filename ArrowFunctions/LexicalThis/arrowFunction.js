function Person() {
  this.age = 0;
  setInterval(() => {
    this.age++; // 'this' refers to the Person instance
    console.log(this.age);
  }, 1000);
}

const p = new Person();
