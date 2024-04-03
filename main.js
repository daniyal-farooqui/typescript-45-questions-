"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
//QUESTION # 2
var name_ = "daniyal";
var massage = ("hello ".concat(name_, ", would you like to learn some python today"));
console.log(massage);
//QUESTION # 3
var person_name = "daniyal";
console.log(person_name.toLowerCase());
console.log(person_name.toUpperCase());
console.log(person_name.charAt(0).toUpperCase() + person_name.slice(1).toLowerCase());
//QUESTION # 4
console.log('shakespeare once said, "the only thing we have to fear is fear itself"');
//QUESTION# 5
var famous_person = "shakespeare";
var qoute = ("".concat(famous_person, " once said, \"The only thing we have to fear is fear itself\""));
console.log(qoute);
//question# 6
var _name = "\t\n daniyal \t\n";
console.log(_name);
console.log(_name.trim());
//QUESTION# 7
console.log(5 + 3); //addition
console.log(10 - 2); //subtraction
console.log(4 * 2); //multiplication
console.log(16 / 2); // division
//QUESTION # 8
console.log(5 + 3); //addition
console.log(11 - 3); //substraction 
console.log(4 * 2); //multiplication 
console.log(16 / 2); //division
//QUESTION # 9
var favoriteNumber = 10;
var massage_ = ("".concat(favoriteNumber, " is my favourite number "));
console.log(massage_);
//QUESTION # 10
//DANIYAL, 18-march-2024 
var MYNAME = "daniyal";
console.log("hello ".concat(MYNAME, ",\" would you like to learn some python today?\""));
//QUESTION # 11
var friendsname = ["farhan", "abdullah", "sufiyan"];
for (var i = 0; i < friendsname.length; i++) {
    console.log(friendsname[i]);
}
//QUESTION # 12
var Names = ["farhan", "abdullah", "sufiyan"];
for (var _i = 0, Names_1 = Names; _i < Names_1.length; _i++) {
    var names = Names_1[_i];
    console.log("hello ".concat(Names, ", would you like to learn some javascript today?"));
}
//QUESTION # 13
var transports = ["fortuner car", "honda motercycle",];
transports.forEach(function (transports) {
    console.log("i would like to  own a ".concat(transports, "."));
});
//Question # 14
var guest = ["hashim", "ahmer", "wahaj"];
guest.forEach(function (guest) {
    console.log("hey ".concat(guest, ",would you like to join me for dinner?"));
});
//QUESTION # 15
var unableToAttend = "hashim";
console.log("".concat(unableToAttend, " can't make it to dinner "));
//replace
var newguest = "farhan";
guest[guest.indexOf(unableToAttend)] = newguest;
//inivation
guest.forEach(function (guest) {
    console.log("dear ".concat(guest, " would you like to join me for dinner"));
});
//QUESTION # 16
var moreguest = ["farhan", "sufiyan", "azlan"];
console.log("great news! I found a bigger dinner table!");
// adding more guests 
moreguest.unshift("anas");
moreguest.splice(moreguest.length / 2, 0, "zaid");
moreguest.push("zain");
moreguest.forEach(function (moreguest) {
    console.log("dear ".concat(moreguest, " would you like join me for dinner"));
});
//QUESTION # 17 
console.log("unfortunality, I can only  two peaple for dinner .");
while (moreguest.length > 2) {
    var removedmoreguest = moreguest.pop();
    console.log("sorry ".concat(removedmoreguest, " I can't invite  you to dinner."));
}
;
moreguest.forEach(function (moreguest) {
    console.log("dear ".concat(moreguest, ", you're still invited to dinner"));
});
// question # 18
var places = ["maldives", "africa", "saudi arabia", "thailand", "japan"];
console.log("originl order : ", places);
console.log("alphabetic order:", __spreadArray([], places, true).sort());
console.log("original order :", places);
console.log("reverse order :", __spreadArray([], places, true).sort().reverse());
console.log("original order :", places);
places.reverse();
console.log("reverse order : ", places);
places.reverse();
console.log(" original order :", places);
places.sort();
console.log("Alaphabetic order :", places);
places.sort();
console.log(" reverse alphabetic order :", places);
//QUESTION # 19 
var dinnerGuest = [" qasim", "ahsan", " fahad ", "ali", "qasim"];
console.log("i'm inviting ".concat(dinnerGuest.length, " people for dinner"));
//QUESTION # 20 
var fav_languages = [" english", "chinese", "german"];
console.log(" these  languages i like most", fav_languages);
// QUESTION # 21
var novel = {
    title: "Peer_e_kamil",
    author: "umera ahmad",
    Publishyear: 2004
};
console.log("novel info: ".concat(novel.title, " by ").concat(novel.author, " published in ").concat(novel.Publishyear, " "));
//QUESTION 22
var clients = ["ali", "jahan", " agha"];
console.log(clients[3]); //intentional error 
(clients[2]) = " agha"; //corecting error
//QUESTION # 23
var city = ('karachi ');
console.log("IS city == 'karachi' ? I predict true");
console.log(city == 'karachi');
console.log("is city == 'lahore'?,  I predict false.");
console.log(city == 'lahore');
var car = 'honda';
console.log("Is car == 'honda' ? I predict true");
console.log(car == 'honda');
console.log("Is car == 'toyota' ? I predict false");
console.log(car == 'toyota');
var Country = 'pakistan';
console.log("is Country == 'pakistan'? I predict true ");
console.log(Country == 'pakistan');
console.log("is Country == 'india' ? i predict false");
console.log(Country == 'india');
var island = 'maldives';
console.log("is island == 'maldives'? i predict true");
console.log(island == 'maldives');
console.log("is island == 'singapore'? i predict fase");
console.log(island == 'singapore');
var student = 'danish';
console.log("is student == 'danish' ? I predict true");
console.log(student == 'danish');
console.log(" is student == 'faraz' ? I predict false ");
console.log(student == 'faraz');
//QUESTION # 24
// Equality with string 
console.log("testing equality with string.");
console.log("apple" == "apple"); // true
//USING lower case function
console.log("Testing with lower case.");
console.log("Apple".toLowerCase() == "apple");
//NUMERICAL TEST
console.log("numerical test");
console.log(8 > 7); //true
console.log(7 < 8); //false
//test using 'and' and 'or' operators
console.log("test with 'and' and 'or' operator ");
console.log(true && false);
console.log(true, false);
var fruit = [" mango ", "apple ", "orange"];
console.log("is 'mango' in fruit?");
console.log(!fruit.includes("mango"));
console.log("is 'cherry' not in fruit?");
console.log(!fruit.includes("cherry"));
//QUESTION # 25
var alien_colour = "red";
if (alien_colour == "red") {
    console.log("you just earned two points!");
}
alien_colour = "green";
if (alien_colour == "green") {
    // NO OUTPUT 
}
//QUESTION # 26
alien_colour = "red";
if (alien_colour == "red") {
    console.log("you just earned 6 points for shooting the alien!");
}
else {
    console.log(" you just earned 10 points.");
}
alien_colour = "black";
if (alien_colour == "black") {
    console.log(" you just earned 6 points for shooting the alien!");
}
else {
    console.log(" you just earned 10 points");
}
// QUESTION # 27  
//GREEN ALIEN VERSION                                                                                                                
alien_colour = "green";
if (alien_colour == "green") {
    console.log("you earned 5 points");
}
else if (alien_colour == "yellow") {
    console.log(" you just earned 10 points");
}
else if (alien_colour == "red") {
    console.log("you earned 10 points");
}
//BLACK ALIEN VERSION 
alien_colour = "black";
if (alien_colour = "black") {
    console.log("you just earned 5 points");
}
else if (alien_colour = "green") {
    console.log(" you just earned 10 points");
}
else if (alien_colour = "red") {
    console.log("you just earned 15 points");
}
//RED ALIEN VERSION 
alien_colour = " red";
if (alien_colour = "red") {
    console.log("you earned  5 points");
}
else if (alien_colour = "green") {
    console.log("you earned 10 points");
}
else if (alien_colour = " yellow") {
    console.log("you earned 5 points");
}
//QUESTION # 28
var age = 17;
if (age < 2) {
    console.log("the person is a baby");
}
else if (age < 4) {
    console.log("the person is toddle;r");
}
else if (age < 13) {
    console.log("the person is kid");
}
else if (age < 20) {
    console.log("the person is teenager");
}
else if (age < 65) {
    console.log(" the person is adult");
}
else {
    console.log("the person is an elder.");
}
//QUESTION # 29 
var favoriteFruit = ["apple", "pineapple", "cherry"];
if (favoriteFruit.includes("apple")) {
    console.log("i really like apples");
}
if (favoriteFruit.includes("cherry")) {
    console.log("i really like cherry");
}
if (favoriteFruit.includes("pineapple")) {
    console.log("i really like pineapple");
}
// QUESTION # 30
var userNames = ["admin", "user 1", "user 2", "user 3"];
userNames.forEach(function (userNames) {
    if (userNames === "admin") {
        console.log("hello admin would you like to see a status report?");
    }
    else {
        console.log("hello ".concat(userNames, ", thankyou for logging in again"));
    }
});
// QUESTION # 31
var user_name = [];
if (user_name.length === 0) {
    console.log("we need some new users");
}
else {
}
//QUESTION # 32
var currentUser = [" user 1", "user2", "admin", "user 3", "user 5"];
var newuser = ["user1", "user2", "user3", "admin", "user6,", "user 9"];
newuser.forEach(function (newUser) {
    if (currentUser.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newuser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newuser, "is available."));
    }
});
//question # 33
var number = [1, 2, 3, 4];
number.forEach(function (number) {
    var suffix = "da";
    if (number === 1) {
    }
    else if (number === 2) {
        suffix = "ni";
    }
    else if (number === 3) {
        suffix = "ya";
    }
    console.log("".concat(number).concat(suffix));
});
// QUESTION # 34
var pizza = [" pepperoni", "fajita", "margherita"];
pizza.forEach(function (pizza) {
    console.log("i  really like ".concat(pizza, " pizza"));
});
console.log("i really love pizza");
//QUESTION # 35
var animal = ["dag", "cat", "rabbit"];
animal.forEach(function (animal) {
    console.log("A ".concat(animal, " would make great pet"));
});
console.log("any of these animal would make great pet");
//QUESTION # 36
function make_shirt(size, massage) {
    console.log("making a ".concat(size, " t-shirt with the ").concat(massage, " printed on it"));
}
make_shirt("medium", "code is life");
//QUESTION # 37
function makeShirt(size, massage) {
    if (size === void 0) { size = "large"; }
    if (massage === void 0) { massage = " i love typescript"; }
    console.log("making a size ".concat(size, " t-shirt with the  massage \"").concat(massage, "\"  prnited on it"));
}
makeShirt();
massage;
makeShirt("medium");
makeShirt("small", "dive into coding");
//QUESTION # 38
function decsribe_city(city, country) {
    if (country === void 0) { country = "pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
decsribe_city("karachi");
decsribe_city("islamabad");
decsribe_city("lahore");
//QUESTION # 39
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
console.log(city_country("lahore", "pakistan"));
console.log(city_country("tokyo", "japan"));
console.log(city_country("istanbul", "turkey"));
//QUESTION # 40
function music_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
    }
    return album;
}
console.log(music_album("artist one", "the first album"));
console.log(music_album("artist 2", "the second album "));
console.log(music_album("artist 3", "the third album"));
//QUESTION # 41
var magicians = ["michel", "john", "alice"];
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
show_magicians(magicians);
// QUESTION # 42
function make_great(magician) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
make_great(magicians); //modifies the original array
show_magicians(magicians); // shows modified names
// QUESTION # 43
var Magicians = ["michel", "john", "alice"];
function makegreat(magicians) {
    var great_magicians = [];
    magicians.forEach(function (magician) {
        great_magicians.push("".concat(magician, " the great"));
    });
}
var great_magicians = make_great(magicians.slice()); // Creates a new modified array
console.log("original magicians:");
show_magicians(magicians); // shows original names 
console.log("great magicians:");
//   QUESTION # 44
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("making a sandwich with : ".concat(items.join(','), "."));
}
make_sandwich("chease", "mustard");
make_sandwich("lettuce", "egg", "chease");
make_sandwich("mayo", "lettuce", "olive", "tomato");
// QUESTION # 45 
function make_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return key = value[0], value;
    });
    return car;
}
console.log(make_car("toyota", "corolla", ["colour", "red"], ["year", "2020"]));
console.log(make_car("ford", "fiesta", ["colour", "blue"], ["sunroof", "true"]));
