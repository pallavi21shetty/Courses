// class person{
     
//     constructor(age, name){
//         this.age=age;
//         this.name=name;
//     }
//      something(){
//      console.log(`Hello my name is ${this.name} and my age is ${this.age}`);

//      }
// }
// let  p=new person("pallavi", 23);
// p.something()


// class animal{
//       constructor(name, species) {
//     this.name = name;
//     this.species = species;
//   }
// introduce() {
//     console.log(`Hi, I am a ${this.species} named ${this.name}.`);
//   }
// }
// let cat = new animal('whiskers','cat')
// cat.introduce()

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
//   bark() {
//     console.log(`${this.name} says woof!`);
//   }
// }
// const dog = new Dog('Rex');
// dog.bark(); 








//inheritence

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   speak() {
//     console.log(`${this.name} makes a sound.`);
//   }
// }
// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name); 
//     this.breed = breed;
//   }
//   speak() {
//     console.log(`${this.name} barks.`);
//   }
// getBreed() {
//     return this.breed;
//   }
// }
// let d =new Dog('buddy','golden')
// d.speak()
// console.log(d.getBreed());


// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   speak() {
//     console.log(`${this.name} makes a sound.`);
//   }
// }
// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name); 
//     this.breed = breed;
//   }
//   speak() {
//     console.log(`${this.name} barks.`);
//   }
// getBreed() {
//     return this.breed;
//   }
// }
// let a= new Animal('rocky')
// a.speak()
// let d =new Dog('buddy','golden')
// d.speak()
// let d2 = new Dog()
// d2.speak()
// console.log(d.getBreed());






// setter and getter

// class circle{
//     constructor(radius){
//         this._radius=radius;
//     }
//     get radius(){
//         return this._radius
//     }
//     set radius(v){
//       if (v <= 0) {
//       console.log('Radius must be positive.');
//     } else {
//       this._radius = v;
//     }
//   }
//   area(){
//     return Math.PI*this._radius*this._radius
//   }
// }
// let c1 = new circle(5)
// console.log(c1.radius);
// console.log(c1.area())
// c1.radius=3
// console.log(c1.radius);
// console.log(c1.area())

// class P {
//     constructor(name) {
//         this._name = name;
//     }
//     get name() {
//         return this._name;
//     }
// }
// const res = new P('Anjali');
// console.log(res.name);

// class P {
//     constructor(name) {
//         this._name = name;
//     }

//     set name(newName) {
//         this._name = newName;
//     }
// }
// const res = new P('Anjali');
// console.log(res._name);
// res.name = 'Ayushi'; 
// console.log(res._name); 


class R {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    get a() {
        return this.width * this.height;
    }
    set a(value) {
        console.log("Area cannot be set directly.");
    }
}
const rect = new R(10, 5);
console.log(rect.a);
rect.a = 60;







//static method

// class simple {
//   static square(x) {
//     return x * x;
//   }
// }
// console.log(simple.square(5)); 




//class expression

// let person= class{
//     constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//   }
// }
// let p = new person("pallavi",23)
// p.greet()







//private field

// class counter{
//     #count =0;
//     increment(){
//         this.#count++;
//     }
//     getcl(){
//         return this.#count;
//     }
// }
// let c1=new counter();
// c1.increment()
// console.log(c1.getcl());







//super
// class Animal {
//   speak() {
//     console.log(`animal makes a sound.`);
//   }
// }
// class Dog extends Animal {
//   speak() {
//     super.speak();
//     console.log(`dog barks.`);
//   }
// }
// let d= new Dog()
// d.speak()
