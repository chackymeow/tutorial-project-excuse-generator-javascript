let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

let random = 0; let random1 = 0; let random2 = 0; let random3 = 0;

random = Math.floor(Math.random()*4);
random1 = Math.floor(Math.random()*4);
random2 = Math.floor(Math.random()*3);
random3 = Math.floor(Math.random()*4);

final = who[random] +" "+ action[random1] +" "+ what[random2] +" "+ when[random3];git 
document.getElementById("enviar").innerHTML = final;