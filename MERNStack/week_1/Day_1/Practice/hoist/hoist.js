// _______________________1_________________
console.log(hello);                                   
var hello = 'world'; 
// undefined
//word

// _______________________2_________________
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//magnet



// _______________________3_________________
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

//only okay
//super cool

// _____________________4_________________
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//chicken
//half-chicken


// _____________________5_________________
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
//chicken
//fish

// ____________________6_________________

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
//disco
//r&b
//disco

// ____________________7_________________
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// san jose
// seattle
// burbank
// seattle

// ____________________8_________________