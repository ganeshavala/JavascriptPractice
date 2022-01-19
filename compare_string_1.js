var a ='adf';
var b = 'aed';

var string ="you are checking my string. you are gonna get killed instantly";
console.log(string.indexOf("",1200));
console.log(string.length);
console.log(string.split(" "));
console.log(a<b);

for(var i=0;i<string.length;i++){


var r = new RegExp(/hi/i);
var t= r.test("Hi,How are you");
console.log(t);

let mess = "Hi, How are you. Hi I am good you. Hi wassup. hi  HI";
let matches = [];
let match;
let r1 =  new RegExp(/hi/gi);
do{
    match = r1.exec(mess);
    if(match){
        matches.push(match)
    }
}while(match != null);

// console.log(matches);

var uri = 'http://your.domain/product.aspx?category=4&product_id=2140&query=lcd+tv' ;
var queryString = {};
uri.replace(
new RegExp ("([^?=&]+)(=([^&]+))?" , "g" ),
function ($0, $1, $2, $3) { console.log(queryString);queryString[$1] = $3; }
);

console.log('ID: ' + queryString['product_id' ]); // ID: 2140
console.log('Name: ' + queryString['product_name' ]); // Name: undefined
console.log('Category: ' + queryString['category' ]);


var DICTIONARY = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" .split("");

function encodeId(num) {
var base = DICTIONARY.length;
var encoded = "" ;

if (num === 0 ) {
return DICTIONARY[0 ];
}
while (num > 0 ) {
console.log(num%base);
encoded += DICTIONARY[(num % base)];
console.log(encoded);
num = Math .floor(num / base);
console.log(num);
}

return reverseWord(encoded);
}

function reverseWord(str) {
var reversed = "" ;
for (var i = str.length - 1 ; i >= 0 ; i-- ) {
reversed += str.charAt(i);
}
return reversed;
}

function decodeId(id) {
var base = DICTIONARY.length;
var decoded = 0 ;

for (var index = 0 ; index < id.split("").length;index++ ) {
console.log("base: "+base+" multiplier: "+decoded * base+" indexof: "+DICTIONARY.indexOf(id.charAt(index)));
decoded = decoded * base + DICTIONARY.indexOf(id.charAt(index));
}

return decoded;
}

console.log(encodeId(11231230 )); // prints 'VhU2'
console.log(decodeId('VhU2' )); 


