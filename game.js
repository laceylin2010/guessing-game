
var user = prompt('What is your name?');
console.log(user);
alert('Good Morning ' + user + ', Lets go grab some coffee!');

var correct = 0;

var q1 = prompt("Is my favorite color green?");
if(q1 === 'no' || q1 ==='No' || q1 ==='n' || q1 === 'N'){
  alert("You got this right " + user +  ". My favorite color is blue.");
  correct = correct + 1;
}
else{
  alert("Oops, " + user + " you got this wrong. My favorite color is blue.");

}

var q2 = prompt("Do I love Rocky Road ice cream?");
if(q2 === 'yes' ||q2 === 'YES' || q2 === 'Y' ||q2 === 'y'){
  alert("Yay! You got it right " + user + '. Rocky Road ice cream is one of my favorites.');
  correct = correct + 1;
}
else{
  alert("Sorry " + user + "you got this wrong. I do indeed love rocky road.");
}

var q3 = prompt('Is starbucks my favorite coffee?');
if(q3 === 'no' || q3 === 'No' || q3 === 'n' || q3 ==='N'){
  alert(user + ', You got this correct! Recently I have enjoyed coffee from specialtys.');
  correct = correct + 1;
}
else{
  alert('Oh ' + user + ', you got this wrong. Starbucks is great coffee, but not my favorite.');
}


var age = prompt('How old am I?');
var ageToNumber = parseInt(age);
  if(ageToNumber === 23){
    alert('congratulations ' + user + ', you got this right!');
    correct = correct + 1;
  } else if(ageToNumber >= 24){
    alert('You guessed too high!');
  } else{
    alert('You guessed too low');
  }
//*while loops "what number am I thinking" question

var number = 55
var thinkingNumber = parseInt(prompt('What number am I thinking?'));

  if (thinkingNumber === number){
    alert('Congratulations ' + user +', you guessed right!');
  }
  while(thinkingNumber !== number){
  if (thinkingNumber > number){
  thinkingNumber = parseInt(prompt('Your guess is too high!'));
} else {
  thinkingNumber = parseInt(prompt('Your guess is too low'));
}

}
if (thinkingNumber === number){
  alert('Congratulations ' + user + ', you guessed right!');
}

alert('You got ' + correct + ' right answers');


//*Multiple Choice question
function cookieGame(){
var cookies = ['chocolate chip', 'oatmeal', 'peanut butter', 'sugar',];
var cookieQue = prompt('What is my favorite cookie?');
for(var i = 0; i<cookies.length; i++){
  if(cookies[i] === cookieQue){
    alert('Correct!');
    correct = correct + 1;
    return;
  }
}
  alert('Wrong');
}
cookieGame();
