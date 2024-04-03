import { reverse } from "dns";
import { title } from "process";

                         //QUESTION # 2
let name_ :string = "daniyal"

let massage: string =(`hello ${name_}, would you like to learn some python today`) 
console.log(massage);

                         //QUESTION # 3
 let person_name :string = "daniyal"    
 console.log(person_name.toLowerCase());
 console.log(person_name.toUpperCase());
console.log(person_name.charAt( 0).toUpperCase()+ person_name.slice ( 1  ).toLowerCase());  
      
                        //QUESTION # 4
console.log( 'shakespeare once said, "the only thing we have to fear is fear itself"')



                         //QUESTION# 5
let famous_person: string = "shakespeare"        
let qoute: string = (`${famous_person} once said, "The only thing we have to fear is fear itself"`)
console.log(qoute);     

                           //question# 6
let _name : string = "\t\n daniyal \t\n"
console.log(_name);
console.log(_name.trim());    

                           //QUESTION# 7
console.log(5+3); //addition
console.log(10-2); //subtraction
console.log(4*2); //multiplication
console.log(16/2); // division


                              //QUESTION # 8
console.log(5+3); //addition
console.log(11-3); //substraction 
console.log(4*2); //multiplication 
console.log(16/2); //division



                                //QUESTION # 9
 let favoriteNumber = 10 
 let massage_ = (`${favoriteNumber} is my favourite number `);   
 console.log(massage_)    
 
                         
                             //QUESTION # 10
 //DANIYAL, 18-march-2024 
 let MYNAME :string = "daniyal"  
 console.log(`hello ${MYNAME}," would you like to learn some python today?"`)  
 
                               
                                //QUESTION # 11
let friendsname : string[] = ["farhan","abdullah","sufiyan"]
for (let i=0; i< friendsname.length;i++)
{
    console.log (friendsname[i]);
}                           
 
                               //QUESTION # 12
 let Names : string[] = ["farhan","abdullah","sufiyan"];
    
 for (let names of Names){
    console.log(`hello ${Names}, would you like to learn some javascript today?`)
 }
                     

                                   //QUESTION # 13
let transports: string[] = ["fortuner car", "honda motercycle",];
transports.forEach( transports => { 
    console.log(`i would like to  own a ${transports}.`);
});

                            //Question # 14
let guest:string[]= ["hashim", "ahmer", "wahaj"];
guest.forEach( guest => {
    console.log(`hey ${guest},would you like to join me for dinner?`);

    
});

                            //QUESTION # 15
let unableToAttend = "hashim";
console.log(`${unableToAttend} can't make it to dinner `);
//replace
let newguest = "farhan";
guest[guest.indexOf(unableToAttend)]= newguest;

//inivation
guest.forEach(guest=>{
    console.log(`dear ${guest} would you like to join me for dinner`)
});



                          //QUESTION # 16
 let moreguest : string[] = ["farhan", "sufiyan", "azlan"];
 console.log("great news! I found a bigger dinner table!");
 
 // adding more guests 
 moreguest.unshift("anas");
 moreguest.splice(moreguest.length / 2, 0, "zaid");
 moreguest.push("zain");

 moreguest.forEach( moreguest => {
    console.log(`dear ${moreguest} would you like join me for dinner`);

 });




                        
                            //QUESTION # 17 
console.log("unfortunality, I can only  two peaple for dinner .");

while( moreguest.length > 2){
    let removedmoreguest =moreguest.pop();
    console.log(`sorry ${removedmoreguest} I can't invite  you to dinner.`);
};

  moreguest.forEach(moreguest => {
console.log(`dear ${moreguest}, you're still invited to dinner`)
});









                        // question # 18
let places : string[]= ["maldives" , "africa", "saudi arabia", "thailand" , "japan"]
console.log("originl order : " , places);
console.log("alphabetic order:", [...places].sort());
console.log("original order :" ,places);
console.log("reverse order :",[...places].sort().reverse());
 console.log("original order :" , places);
 places.reverse();
 console.log("reverse order : ", places);
 places.reverse();
 console.log(" original order :" , places)
places.sort();
console.log("Alaphabetic order :" ,places);
places.sort();
console.log(" reverse alphabetic order :" ,places);



                                             //QUESTION # 19 
let dinnerGuest: string []= [" qasim" , "ahsan", " fahad ", "ali","qasim"];
console.log(`i'm inviting ${dinnerGuest.length} people for dinner`);                                             


                                          //QUESTION # 20 
let  fav_languages: string[]  =[" english","chinese", "german"];
console.log(" these  languages i like most",fav_languages)          

                                     // QUESTION # 21
let novel:{title:string ; author:string ; Publishyear: number} ={                                    
                                title: "Peer_e_kamil",
                               author: "umera ahmad",
                                Publishyear: 2004
};
console.log(`novel info: ${novel.title} by ${novel.author} published in ${novel.Publishyear} `);    


                                             //QUESTION 22
let clients:string[]=["ali" , "jahan", " agha"];
console.log(clients[3]);  //intentional error 
 (clients[2]) = " agha";   //corecting error


                                           //QUESTION # 23
let  city  = ('karachi ');

console.log("IS city == 'karachi' ? I predict true")
console.log(city == 'karachi')
 console.log("is city == 'lahore'?,  I predict false.");
console.log(city == 'lahore');

let car = 'honda';
console.log("Is car == 'honda' ? I predict true");
console.log(car == 'honda');

 console.log("Is car == 'toyota' ? I predict false");                                       
 console.log(car == 'toyota');      
 
 
 let Country = 'pakistan'
 console.log("is Country == 'pakistan'? I predict true ");
 console.log(Country == 'pakistan');
 console.log("is Country == 'india' ? i predict false");
 console.log(Country == 'india')

let island = 'maldives' 
console.log("is island == 'maldives'? i predict true");
console.log(island == 'maldives');
console.log("is island == 'singapore'? i predict fase");
console.log(island =='singapore');

let student = 'danish' 
console.log( "is student == 'danish' ? I predict true");
console.log(student == 'danish'  );
console.log(" is student == 'faraz' ? I predict false ");
console.log(student == 'faraz');

                                   //QUESTION # 24
// Equality with string 
console.log("testing equality with string.");
console.log("apple" == "apple");     // true

//USING lower case function
console.log("Testing with lower case.");
console.log("Apple".toLowerCase()== "apple");

//NUMERICAL TEST
console.log("numerical test");
console.log(8>7);  //true
console.log(7<8);  //false

//test using 'and' and 'or' operators
console.log("test with 'and' and 'or' operator ");
console.log(true && false );
console.log(true  , false );

let fruit:string[] =[" mango ", "apple " , "orange"]
console.log("is 'mango' in fruit?");
console.log(!fruit.includes("mango"));  

console.log("is 'cherry' not in fruit?");
console.log(!fruit.includes("cherry"));


                                  //QUESTION # 25
let alien_colour = "red";
if (alien_colour == "red"){
    console.log("you just earned two points!");
}                                  


alien_colour = "green";
if (alien_colour == "green"){
     // NO OUTPUT 
}

                                      //QUESTION # 26
  alien_colour = "red"
if (alien_colour == "red"){
    console.log("you just earned 6 points for shooting the alien!");
} else {
    console.log(" you just earned 10 points.");
}                         

alien_colour = "black"
if( alien_colour == "black"){
    console.log(" you just earned 6 points for shooting the alien!");
} else{
    console.log(" you just earned 10 points");
}
                   

                                      // QUESTION # 27  
  //GREEN ALIEN VERSION                                                                                                                
alien_colour = "green"
if (alien_colour == "green"){
    console.log("you earned 5 points");
}else if (alien_colour == "yellow"){
    console.log(" you just earned 10 points");
}else if(alien_colour == "red"){
    console.log("you earned 10 points");
}
//BLACK ALIEN VERSION 
alien_colour = "black"
if (alien_colour = "black"){
    console.log("you just earned 5 points")
} else if (alien_colour = "green"){
    console.log(" you just earned 10 points")
} else if (alien_colour = "red"){
    console.log("you just earned 15 points")
}
 //RED ALIEN VERSION 
alien_colour = " red";
if (alien_colour = "red"){
    console.log("you earned  5 points")
}else if (alien_colour = "green"){
    console.log("you earned 10 points")
} else if(alien_colour = " yellow"){
    console.log("you earned 5 points" )
}

                                 //QUESTION # 28
let age: number = 17;
if (age < 2){
    console.log("the person is a baby");
} else if (age < 4){
    console.log("the person is toddle;r");
} else if (age < 13){
    console.log("the person is kid");
} else if (age < 20){
    console.log("the person is teenager");
}  else if ( age < 65 ){
    console.log(" the person is adult");
}   else {
    console.log("the person is an elder.");
}              


                                        //QUESTION # 29 
 let favoriteFruit: string[] =["apple", "pineapple","cherry"];
 if
 (favoriteFruit.includes("apple")){
    console.log("i really like apples")
}                                      
if (favoriteFruit.includes("cherry")){
    console.log("i really like cherry")
}
if(favoriteFruit.includes("pineapple")){
    console.log("i really like pineapple")
}
                                       // QUESTION # 30
let userNames : string[]=["admin","user 1", "user 2" ,"user 3"];
userNames.forEach(userNames =>{
    if (userNames === "admin"){
        console.log("hello admin would you like to see a status report?");
    } else {
        console.log(`hello ${userNames}, thankyou for logging in again`)
    }

})                              

                                           // QUESTION # 31
let user_name: string[] =[];
if (user_name.length === 0){
    console.log("we need some new users")
} else{

}


                                            //QUESTION # 32
let currentUser: string[] =[" user 1" , "user2", "admin" , "user 3" , "user 5"];
let newuser: string[] =["user1", "user2", "user3", "admin", "user6,","user 9"]
newuser.forEach(newUser => {
    if(currentUser.some(currentUser => currentUser.toLowerCase () === newUser.toLowerCase ())){
        console.log(`${newuser} will need to enter a new username.`);
    }else{
        console.log(`${newuser}is available.`);
    }
});

                         //question # 33
 let number: number[] =[ 1 , 2 , 3 , 4 ];
 number.forEach(number => {
    let suffix = "da";
    if (number === 1){
} else if (number === 2){
    suffix = "ni";
}else if (number === 3){
    suffix = "ya";
}
console.log(`${number}${suffix}`);
 })                         
                                            
                                 // QUESTION # 34
let pizza:string[] = [" pepperoni", "fajita" , "margherita"];
pizza.forEach(pizza => {
    console.log( `i  really like ${pizza} pizza` )
})   
console.log("i really love pizza");     

                                    //QUESTION # 35
let animal:string[] =["dag" , "cat", "rabbit" ];
animal.forEach(animal =>{
    console.log( `A ${animal} would make great pet`)
} );
console.log("any of these animal would make great pet")   


                                         //QUESTION # 36
function make_shirt (size:string, massage:string){
    console.log(`making a ${size} t-shirt with the ${massage} printed on it`)
}
make_shirt("medium", "code is life"); 

                             //QUESTION # 37
function makeShirt( size: string = "large" , massage :string =" i love typescript"){
    console.log (`making a size ${size} t-shirt with the  massage "${massage}"  prnited on it`)
}                          
makeShirt();
massage
makeShirt("medium");
makeShirt("small" , "dive into coding");

                               //QUESTION # 38
function decsribe_city( city:string , country:string = "pakistan"){
    console.log(`${city} is in ${country}` )
}                               
decsribe_city("karachi");
decsribe_city("islamabad")
decsribe_city("lahore")
                                    //QUESTION # 39
function city_country(city:string , country:string):string {
    return `${city}, ${country}`;
    
}                                    
console.log(city_country("lahore" , "pakistan"));
console.log(city_country("tokyo","japan"));
console.log(city_country("istanbul", "turkey"));

                                            //QUESTION # 40
function music_album(artist:string, title:string , tracks?:string){
    let album = { artist, title};
    if (tracks) {
        
    }
        
    
    return album;
}                      
console.log(music_album("artist one","the first album"));
console.log(music_album("artist 2", "the second album "));
console.log(music_album("artist 3","the third album"))                      

                                          //QUESTION # 41
let magicians:string[] =["michel" , "john", "alice"];
function show_magicians(magicians:string[]){
    magicians.forEach(magician => {
        console.log(magician);
    });
}  
 show_magicians(magicians)

                                       // QUESTION # 42
function make_great(magician:string[]){
    for (let i = 0; i < magicians.length; i++){
        magicians[i] = magicians[i] +" the Great"
    }
}                                       
make_great(magicians);          //modifies the original array
 show_magicians(magicians);         // shows modified names
                
                                           // QUESTION # 43
 let Magicians:string[] = ["michel" ,"john" , "alice"];
 function makegreat(magicians:string[]){
    let great_magicians = [];
    magicians.forEach(magician =>{
        great_magicians.push(`${magician} the great`);
    })
 }                                           
 let great_magicians = make_great(magicians.slice()); // Creates a new modified array
 console.log("original magicians:"); 
 show_magicians(magicians); // shows original names 
 console.log("great magicians:");
  
                                           //   QUESTION # 44
function make_sandwich(...items:string[]){
    console.log(`making a sandwich with : ${items.join(',')}.`)
}                                           
make_sandwich("chease" , "mustard");
make_sandwich("lettuce", "egg", "chease");
make_sandwich("mayo" , "lettuce" , "olive" , "tomato");

                                            // QUESTION # 45 
 function make_car(manufacturer:string , model:string, ...options:[string,any][] ): object{
    let car = {manufacturer, model };
    options.forEach(([key, value]) => [key] = value);
    return car;

 } 
 console.log(make_car("toyota","corolla",["colour","red"],["year","2020"]));
 console.log(make_car("ford","fiesta",["colour","blue"],["sunroof","true"]))
