

//player 1 click for X
//player 2 click for O
//1. To assign each box a variable to get documents

confirm("Are you ready?");

var one = document.getElementById('1');
var two = document.getElementById('2');
var three = document.getElementById('3');
var four = document.getElementById('4');
var five = document.getElementById('5');
var six = document.getElementById('6');
var seven = document.getElementById('7');
var eight = document.getElementById('8');
var nine = document.getElementById('9');
var button = document.getElementById('resetbutton');
var arrayCards = [one, two, three, four, five, six, seven, eight, nine];
var turn = 'X';
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

//user clicks
//Player X will always start 1st and the alternating will be via player +1 -1
//Still trying to clean this up by shortening it
var player = 1;

var card = document.getElementsByClassName('card');


for (var i = 0; i < 9; i++ ){
card[i].addEventListener('click', function(){
if (this.innerHTML === "" && player ===1) {
this.innerHTML = 'X';
this.style.background = "#CCFFFF";
player = 2;
match();

} else if (this.innerHTML === "" && player === 2) {
this.innerHTML = 'O';
this.style.background = "#CCFFFF";
player = 1;
match();
}

else {alert("This box has already been taken!");
}
});
}





//Reset Function
function reset() {
  window.location.reload();
/*var card = document.getElementsByClassName('card');
 for(var i = 0; i < card.length; i++) {
 card[i].innerHTML=" ";
 ret();
 card[i].style.background="white";
}
 console.log(alert("Hope you are enjoying the game! Try one more time!"));*/
}

button.addEventListener("click", reset);

//Mathcing of winning condition with Alert Msg
//Assign variables to represent inner text of the TTT boxes
var value0 = document.getElementsByClassName('card')[0].innerText;
var value1 = document.getElementsByClassName('card')[1].innerText;
var value2 = document.getElementsByClassName('card')[2].innerText;
var value3 = document.getElementsByClassName('card')[3].innerText;
var value4 = document.getElementsByClassName('card')[4].innerText;
var value5 = document.getElementsByClassName('card')[5].innerText;
var value6 = document.getElementsByClassName('card')[6].innerText;
var value7 = document.getElementsByClassName('card')[7].innerText;
var value8 = document.getElementsByClassName('card')[8].innerText;


//I can;t seems to effect pop out alerts when i assign arrays for the results matching.
/*form arrays of winning conditions
var win1 = [value0, value1, value2];
var win2 = [value3, value4, value5];
var win3 = [value6, value7, value8];
var win4 = [value0, value3, value6];
var win5 = [value1, value4, value7];
var win6 = [value2, value5, value8];
var win7 = [value0, value4, value8];
var win8 = [value2, value4, value6];

values for winning the game
var player1 = ["X", "X", "X"];
var player2 = ["O", "O", "O"];*/



//Results matching

var oneWinner = document.getElementById('1').innerHTML;
var twoWinner = document.getElementById('2').innerHTML;
var threeWinner = document.getElementById('3').innerHTML;
var fourWinner = document.getElementById('4').innerHTML;
var fiveWinner = document.getElementById('5').innerHTML;
var sixWinner = document.getElementById('6').innerHTML;
var sevenWinner = document.getElementById('7').innerHTML;
var eightWinner = document.getElementById('8').innerHTML;
var nineWinner = document.getElementById('9').innerHTML;

//Will touch up further using arrys

function match(){
  if(one.innerHTML === "X" &&
     two.innerHTML === "X" &&
     three.innerHTML === "X" ||
     four.innerHTML === "X" &&
     five.innerHTML === "X" &&
     six.innerHTML === "X" ||
     seven.innerHTML === "X" &&
     eight.innerHTML === "X" &&
     nine.innerHTML === "X" ||
     one.innerHTML === "X" &&
     five.innerHTML === "X" &&
     nine.innerHTML === "X" ||
     three.innerHTML === "X" &&
     five.innerHTML === "X" &&
     seven.innerHTML ==="X" ||
     one.innerHTML === "X" &&
     four.innerHTML === "X" &&
     seven.innerHTML === "X" ||
     two.innerHTML === "X" &&
     five.innerHTML === "X" &&
     eight.innerHTML === "X" ||
     three.innerHTML === "X" &&
     six.innerHTML === "X" &&
     nine.innerHTML === "X")
  {
    resultsMsg ();
    alert("Player X win!");
    reset();
  }
  else if (
    one.innerHTML === "O" &&
     two.innerHTML === "O" &&
     three.innerHTML === "O" ||
     four.innerHTML === "O" &&
     five.innerHTML === "O" &&
     six.innerHTML === "O" ||
     seven.innerHTML === "O" &&
     eight.innerHTML === "O" &&
     nine.innerHTML === "O" ||
     one.innerHTML === "O" &&
     five.innerHTML === "O" &&
     nine.innerHTML === "O" ||
     three.innerHTML === "O" &&
     five.innerHTML === "O" &&
     seven.innerHTML ==="O" ||
     one.innerHTML === "O" &&
     four.innerHTML === "O" &&
     seven.innerHTML === "O" ||
     two.innerHTML === "O" &&
     five.innerHTML === "O" &&
     eight.innerHTML === "O" ||
     three.innerHTML === "O" &&
     six.innerHTML === "O" &&
     nine.innerHTML === "O")
  {
      resultsMsg ();
      alert("Player O wins!");
      reset();
  }

}

function resultsMsg (){
  document.getElementById('msg').innerHTML = "Yes, there is a winner! Play again!";
}

function ret(){
  document.getElementById('msg').innerHTML = "Tic Tac Toe Game";
}
