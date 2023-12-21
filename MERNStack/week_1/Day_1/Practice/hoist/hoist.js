// _______________________1_________________
var hello
console.log(hello);                                   
hello = 'world'; 
// undefined
//word

// _______________________2_________________
var needle
function test(){
    var needle 
    needle = 'magnet';
    console.log(needle);
}
needle = 'haystack';
test();
//magnet



// _______________________3_________________
var brendan
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
brendan = 'super cool';
console.log(brendan);

//only okay
//super cool

// _____________________4_________________
var food
food = 'chicken';
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food
    food = 'gone';
}
console.log(food);
eat();
//chicken
//half-chicken


// _____________________5_________________
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food
    food = "fish";
    console.log(food);
}
console.log(food);
//chicken
//fish

// ____________________6_________________

console.log(genre);
var genre
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre
    genre = "r&b";
    console.log(genre);
}
genre = "disco";
rewind();
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
    var dojo
    dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// san jose
// seattle
// burbank
// seattle

// ____________________8_________________