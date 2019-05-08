/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding binds the this keyword to the global scope, so it becomes binded to the global object like window
* 2. Implicit binding binds the this keyword refers to what is connected with, thus being called implicit binding, since you don't specify to where it is binded
* 3. New binding the this keyword will remain binded to the object created by the object constructor
* 4. Explicit binding means that you specifiy to where the this keywords binds to, so you need to specify where it is binded 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function foo(mee){
    console.log("moo " + mee + this)
}
foo("moo"); // Since foo() is a child of the object window
//////////////
// Principle 2

// code example for Implicit Binding
const patrick = {
    name: "Patrick R.",
    talk(){
        console.log(`"hi my name is ${this.name}"`)
    }
}
patrick.talk(); // Since .talk() is a child of the object patrick this binds to patrick
///////////////
// Principle 3

// code example for New Binding
function Game(name, platform){
    this.name = name;
    this.platform = platform;
}
Game.prototype.play = function(){
    console.log(`"You just played ${this.name} in ${this.platform}"`)
}
const silentWater = new Game("Silent Water", "SNES")
const loudLava= new Game("Loud Lava", "N64")
silentWater.play() // This is bound to the object created by the object constuctor, in this case silentWater
// Principle 4

// code example for Explicit Binding
const thatThing = silentWater.play
thatThing.call(loudLava)