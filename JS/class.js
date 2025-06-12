// class Vehicle{
// }
// let car = new Vehicle()
// let bus = new Vehicle()
// console.log(car);


// class Vehicle{
//     constructor(){
//     console.log("i have been called");
//     }  
// }
// let car = new Vehicle()
// let bus = new Vehicle()

// class Vehicle{
//     constructor(wh, wt){
//     let wheels=wh
//     let weight = wt
//     console.log(wheels,weight);
    
//     }  
// }
// let car = new Vehicle(4, '2T')
// let bus = new Vehicle(6, '5T')
// let jeep = new Vehicle(5, '3T')



// class Vehicle{
//     constructor(wh, wt){
//     let wheels=wh
//     let weight = wt
//     console.log(wheels,weight);
    
//     }  
// }
// let car = new Vehicle(4, '2T')
// let bus = new Vehicle(6, '5T')
// let jeep = new Vehicle(5, '3T')
// console.log(car.wheels);


// class Vehicle{
//     constructor(wh, wt){
//     this.wheels=wh
//     this.weight = wt
//     }  
// }
// let car = new Vehicle(4, '2T')
// let bus = new Vehicle(6, '5T')
// let jeep = new Vehicle(5, '3T')
// console.log(car.wheels);
// console.log(bus.wheels);


// class Vehicle{
//     constructor(wh, wt){
//     this.wheels=wh
//     this.weight = wt
//     }  
//     getDetails(){
//         console.log(`this object has ${this.wheels} wheels and ${this.weight}`);
//     }
// }
// let car = new Vehicle(4, '2T')
// let bus = new Vehicle(6, '5T')
// let jeep = new Vehicle(5, '3T')
// car.getDetails()
// bus.getDetails()


// class Vehicle{
//     constructor(wh, wt){
//     this.wheels=wh
//     this.weight = wt
//     this.color ="black"
//     this.currentlocation ="Banglore"
//     }  
//     getDetails(){
//         console.log(`this object has ${this.wheels} wheels and ${this.weight} and current location its in ${this.currentlocation} with color ${this.color}}`);
//     }
//     travel(location){
//         this.currentlocation=location
//     }
//     get getvehiclecolor(){
//         console.log(`the vehicle color is: ${this.color}`);
//     }
//      set setvehiclecolor(color){
//         this.color=color
//     }
// }
// let car = new Vehicle(4, '2T')
// let bus = new Vehicle(6, '5T')
// let jeep = new Vehicle(5, '3T')
// console.log("===>", car.getvehiclecolor);




// class Vehicle{
//     constructor(wh, wt){
//     this.wheels=wh
//     this.weight = wt
//     this.color ="black"
//     this.currentlocation ="Banglore"
//     }  
//     getDetails(){
//         console.log(`this object has ${this.wheels} wheels and ${this.weight} and current location its in ${this.currentlocation} with color ${this.color}}`);
//     }
//     travel(location){
//         this.currentlocation=location
//     }
//     get getvehiclecolor(){
//         console.log(`the vehicle color is: ${this.color}`);
//     }
//      set setvehiclecolor(color){
//         this.color=color
//     }
// }
// let car = new Vehicle(4, '2T')
// let bus = new Vehicle(6, '5T')
// let jeep = new Vehicle(5, '3T')
// car.getvehiclecolor


// class Vehicle{
//     constructor(wh, wt){
//     this.wheels=wh
//     this.weight = wt
//     this.color ="black"
//     this.currentlocation ="Banglore"
//     }  
//     getDetails(){
//         console.log(`this object has ${this.wheels} wheels and ${this.weight} and current location its in ${this.currentlocation} with color ${this.color}}`);
//     }
//     travel(location){
//         this.currentlocation=location
//     }
//     get getvehiclecolor(){
//         console.log(`the vehicle color is: ${this.color}`);
//     }
//      set setvehiclecolor(color){
//         this.color=color
//     }
// }
// let car = new Vehicle(4, '2T')
// let bus = new Vehicle(6, '5T')
// let jeep = new Vehicle(5, '3T')
// car.getvehiclecolor
// car.setvehiclecolor = "red"


// class Vehicle{
//     constructor(wh, wt){
//     this.wheels=wh
//     this.weight = wt
//     this.color ="black"
//     this.currentlocation ="Banglore"
//     }  
//     getDetails(){
//         console.log(`this object has ${this.wheels} wheels and ${this.weight} and current location its in ${this.currentlocation} with color}`);
//     }
//     travel(location){
//         this.currentlocation=location
//     }
//     get getvehiclecolor(){
//         console.log(`the vehicle color is: ${this.color}`);
//     }
//      set setvehiclecolor(color){
//         this.color=color
//     }
// }
// let car = new Vehicle(4, '2T')
// let bus = new Vehicle(6, '5T')
// let jeep = new Vehicle(5, '3T')
// car.getvehiclecolor
// car.setvehiclecolor = "red"
// car.getvehiclecolor



// class Vehicle{
//     constructor(wh, wt){
//     this.wheels=wh
//     this.weight = wt
//     this.color ="black"
//     this.currentlocation ="Banglore"
//     }  
//     getDetails(){
//         console.log(`this object has ${this.wheels} wheels and ${this.weight} and current location its in ${this.currentlocation} with color}`);
//     }
//     travel(location){
//         this.currentlocation=location
//     }
//     get getvehiclecolor(){
//         console.log(`the vehicle color is: ${this.color}`);
//     }
//      set setvehiclecolor(color){
//         this.color=color
//     }
//     static getvehicledetails(){
//         console.log("this is class level");
        
//     }
// }
// let car = new Vehicle(4, '2T')
// let bus = new Vehicle(6, '5T')
// let jeep = new Vehicle(5, '3T')
// Vehicle.getvehicledetails()




//oops


//class father{
//     constructor(){
//         this.house = "2 BHk"
//         this.bike ="Activa"
//     }
//     get details(){
//         console.log(`the father has ${this.house} and ${this.bike}`);
        
//     }
// }
// let f1 =new father()
// f1.details




// class father{
//     constructor(){
//         this.house = "2 BHk"
//         this.bike ="Activa"
//     }
//     get details(){
//         console.log(` I have ${this.house} and ${this.bike}`);
        
//     }
// }

// class son extends father{
//     constructor(){
//         super()
//     }
// }
// let s1 =new son()
// s1.details


// class father{
//     constructor(){
//         this.house = "2 BHk"
//         this.bike ="Activa"
//     }
//     get details(){
//         console.log(` I have ${this.house} and ${this.bike}`);
        
//     }
// }

// class son extends father{
//     constructor(){
//         super()
//         this.car ="BMW"
//     }
//      get details(){
//         console.log(` I have ${this.house} and ${this.bike} bike and ${this.car} car`);
        
//     }
// }
// let s1 =new son()
// s1.details



// class father{
//     constructor(bike ="honda"){
//         this.house = "2 BHk"
//         this.bike =bike
//     }
//     get details(){
//         console.log(` I have ${this.house} and ${this.bike}`);
        
//     }
// }

// class son extends father{
//     constructor(){
//         super()
//         this.car ="BMW"
//     }
//      get details(){
//         console.log(` I have ${this.house} and ${this.bike} bike and ${this.car} car`);
        
//     }
// }
// let f1 =new father("pulsar")
// f1.details
// let s1 =new son()
// s1.details


class father{
    constructor(bike ="honda"){
        this.house = "2 BHk"
        this.bike =bike
    }
    get details(){
        console.log(` I have ${this.house} and ${this.bike}`);
        
    }
}

class son extends father{
    constructor(bike){
        super(bike)
        this.car ="BMW"
    }
     get details(){
        console.log(` I have ${this.house} and ${this.bike} bike and ${this.car} car`);
        
    }
}
let f1 =new father("pulsar")
f1.details
let s1 =new son("TVS")
s1.details