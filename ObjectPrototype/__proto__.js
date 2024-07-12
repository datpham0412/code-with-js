function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} make a noise.`);
};

const cat = new Animal("DatPham");
cat.speak();

console.log(cat.__proto__ === Animal.prototype);
console.log(Animal.prototype.__proto__ === Object.prototype);
