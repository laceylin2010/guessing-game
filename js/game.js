
var user = prompt('What is your name?');
console.log(user);
alert('Good Morning ' + user + ', Lets go grab some coffee!');

var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');

//*guessing game functions*//

function ques1(){
var ans1 = prompt('Is my favore color green?');
if (ans1.toLowerCase() === 'n' || ans1.toUpperCase() === 'NO'){
  one.textContent = 'You got this right! Green is my second favorite color.';
}else if(ans1.toLowerCase() === 'y' || ans1.toLowerCase() === ('YES')){
  one.textContent = 'No, my favorite color is blue.'
} else {
alert('Please provide a yes or no answer.');
}
}

function ques2(){
var ans2 = prompt("Do I love Road Ice Cream?");
if(ans2.toLowerCase() === 'y' || ans2.toUpperCase() === 'YES'){
  two.textContent = 'Thats correct! Rocky road ice cream is one of my favorites.';
}else if (ans2.toLowerCase() === 'n' || ans3.toUpperCase() === 'NO'){
  two.textContent = 'What! No, I love rocky road!';
} else{
  alert('Please enter a yes or no answer');
}
}


function ques3(){
var ans3 = prompt('Is starbucks my favorite coffee?');
if(ans3.toLowerCase() === 'N' || ans3.toUpperCase() === 'NO'){
  three.textContent = 'You got this correct! Recently I have enjoyed coffee from specialtys.';
}else if (ans3.toLowerCase() === 'Y' || ans3.toUpperCase() === 'YES'){
  three.textContent = 'Oh ' + user + ', you got this wrong. Starbucks is great coffee, but not my favorite.';
} else{
    alert('Please enter a yes or no answer');
}
}

ques1();
ques2();
ques3();



//
// var age = prompt('How old am I?');
// var ageToNumber = parseInt(age);
//   if(ageToNumber === 23){
//     alert('congratulations ' + user + ', you got this right!');
//     correct = correct + 1;
//   } else if(ageToNumber >= 24){
//     alert('You guessed too high!');
//   } else{
//     alert('You guessed too low');
//   }
// //*while loops "what number am I thinking" question
//
// var number = 55
// var thinkingNumber = parseInt(prompt('What number am I thinking?'));
//
//   if (thinkingNumber === number){
//     alert('Congratulations ' + user +', you guessed right!');
//   }
//   while(thinkingNumber !== number){
//   if (thinkingNumber > number){
//   thinkingNumber = parseInt(prompt('Your guess is too high!'));
// } else {
//   thinkingNumber = parseInt(prompt('Your guess is too low'));
// }
//
// }
// if (thinkingNumber === number){
//   alert('Congratulations ' + user + ', you guessed right!');
// }
//
// alert('You got ' + correct + ' right answers');
//
//
// //*Multiple Choice question
// function cookieGame(){
// var cookies = ['chocolate chip', 'oatmeal', 'peanut butter', 'sugar',];
// var cookieQue = prompt('What is my favorite cookie?').toLowerCase()
// for(var i = 0; i<cookies.length; i++){
//   if(cookies[i] === cookieQue){
//     alert('Correct!');
//     correct = correct + 1;
//     return;
//   }
// }
//   alert('Wrong');
// }
// cookieGame();
