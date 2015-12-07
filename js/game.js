var user = prompt('What is your name?');
console.log(user);
alert('Good Morning ' + user + ', Lets go grab some coffee!');

//*Yes or No questions*//
var correct = 0;

function ques1(){
  var one = document.getElementById('one');

  var ans1 = prompt('Is my favore color green?');
  if (ans1.toLowerCase() === 'n' || ans1.toUpperCase() === 'NO'){
    one.className = 'right';
    one.textContent = 'You got this right! Green is my second favorite color.';
    correct = correct+1;
  }else if (ans1.toLowerCase() === 'y' || ans1.toUpperCase() === 'YES'){
    one.textContent = 'No, my favorite color is blue.';
    one.className = 'wrong';
  } else {
    one.className = 'Please provide a yes or no answer.';

  }
}
  ques1();

function ques2(){
  var two = document.getElementById('two');

  var ans2 = prompt("Do I love Road Ice Cream?");
  if(ans2.toLowerCase() === 'y' || ans2.toUpperCase() === 'YES'){
    two.className = 'right';
    two.textContent = 'Thats correct! Rocky road ice cream is one of my favorites.';
    correct = correct+1;;
  }else if (ans2.toLowerCase() === 'n' || ans2.toUpperCase() === 'NO'){
    two.className = 'wrong';
    two.textContent = 'What! No, I love rocky road!';
  } else{
    two.className= 'Please enter a yes or no answer';

  }
}
  ques2();


function ques3(){
  var three = document.getElementById('three');

  var ans3 = prompt('Is starbucks my favorite coffee?');
  if(ans3.toLowerCase() === 'n' || ans3.toUpperCase() === 'NO'){
    three.className = 'right';
    three.textContent = 'You got this correct! Recently I have enjoyed coffee from specialtys.';
    correct = correct+1;
  }else if (ans3.toLowerCase() === 'y' || ans3.toUpperCase() === 'YES'){
    three.className = 'wrong';
    three.textContent = 'Oh ' + user + ', you got this wrong. Starbucks is great coffee, but not my favorite.';
  } else{
    three.className = 'Please enter a yes or no answer';

  }
}
ques3();

function ques4(){
  var four = document.getElementById('four');

  var age = prompt('How old am I?');
  var ageToNumber = parseInt(age);
    if(ageToNumber === 23){
      four.className = 'right';
      four.textContent = 'Congratulations ' + user + ', you got this right!';
      correct = correct+1;
    } else if(ageToNumber >= 24){
      four.className = 'wrong';
      four.textContent = 'You guessed too high!';
    } else{
      four.className = 'You guessed too low';

    }
  }
ques4();
//
// //*while loops "what number am I thinking" question
// //
function ques5(){
  var number = 55
  var thinkingNumber = parseInt(prompt('What number am I thinking?'));
  var five = document.getElementById('five');
    ; if (thinkingNumber === number){
        five.className = 'right';
        five.textContent = 'Congratulations ' + user +', you guessed right!';
        correct = correct+1;
      } while(thinkingNumber !== number){
      if (thinkingNumber > number){
        five.className = 'wrong';
      thinkingNumber = parseInt(prompt('Your guess is too high!'));
    } else {
      five.className = 'wrong';
      thinkingNumber = parseInt(prompt('Your guess is too low'));
      }
    } if (thinkingNumber === number){
      five.className = 'right';
      five.textContent = 'Congratulations ' + user +', you guessed right!';


  }
  }
ques5();

// //*Multiple Choice question
//
var six = document.getElementById('six');

function cookieGame(){
  var cookies = ['chocolate chip', 'oatmeal', 'peanut butter', 'sugar'];
  var cookieQue = prompt('What is my favorite cookie?').toLowerCase();
  for(var i = 0; i<cookies.length; i++){
    if(cookies[i] === cookieQue){
      six.className = 'right';
      six.textContent = 'Correct!';
      correct = correct+1;
      return;
    }
    else{
      six.className= 'wrong';
      six.textContent = 'Sorry ' + user + ', thats incorrect.'
    }
  }
  }
  cookieGame();

  var numberCorrect = document.getElementById('numberCorrect');

    numberCorrect.textContent = 'You got ' + correct + ' right!';
    numberCorrect();
