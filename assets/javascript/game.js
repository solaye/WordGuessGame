const wordBank = ['neighborhood', 'radioactive', 'spider', 'marvel', 'venom', 'carnage', 'octavius'];
  var ilikewords = "";
  var letters= [];
  var coolStory = [];
  var wrongLetters = [];

  var digit = 0;
  var guessesLeft = 10;
  var losses = 0;
  var wins= 0;


  function gameStart() {
    ilikewords = wordBank[Math.floor(Math.random() * wordBank.length)];
    letters = ilikewords.split("");
    digit = letters.length;

    // console.log(digit);
    // console.log(letters);
    // console.log(ilikewords)

    guessesLeft = 10;
    wrongLetters = [];
    coolStory = [];

    for(var i = 0; i < digit; i++) {
      coolStory.push("_")
      console.log(coolStory)
    }
           
    document.getElementById("secretAnswer").innerHTML = coolStory.join(" ");
    document.getElementById("game").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;

  };
    

function checkAnswer (letter) {

  var letterInWord = false;

  for(var j = 0; j < digit; j++) {

    if (letter == ilikewords[j]) {
      letterInWord = true;
    }
  }
 
  if (letterInWord) {
    for(var j = 0; j < digit; j++) {
      if (ilikewords[j] == letter) {
        coolStory[j] = letter;
        console.log(coolStory)
      }         
    }
  } else {
      wrongLetters.push(letter);
      guessesLeft--;
  }
  
};


gameStart();


function circuit() {
  document.getElementById("guessesLeft").innerHTML = guessesLeft;
  document.getElementById("answersGuessed").innerHTML = wrongLetters;
  document.getElementById("secretAnswer").innerHTML = coolStory.join(" ");
   
  if(letters.toString() == coolStory.toString()) {
    wins++
    document.getElementById("game").innerHTML = wins;
    gameStart();
    
  } else if (guessesLeft===0) {
      losses++
      document.getElementById("losses").innerHTML = losses;
      gameStart();
  }
};

//event listener
document.onkeypress = function(event) {
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  console.log(userGuess);
  checkAnswer(userGuess);
  circuit();
  switch(guessesLeft) {
   
    case 5:
    document.getElementById("myimg").src = "../assets/images/hang1.gif"; 
      break;
      case 4:
    document.getElementById("myimg").src = "../assets/images/hang2.gif" 
      break;
    case 3:
    document.getElementById("myimg").src = "../assets/images/hang3.gif"; 
      break;
      case 2:
      document.getElementById("myimg").src = "../assets/images/hang4.gif" 
        break;
        
      case 1:
      document.getElementById("myimg").src = "../assets/images/hang5.gif"; 
        break;
  
  }
  


  

};



  



