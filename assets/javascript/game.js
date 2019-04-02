var needaDrink = prompt("Press a key to get the fun started.");

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
           
    document.getElementById("Output").innerHTML = coolStory.join(" ");
    document.getElementById("dubs").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;

  };
    

function checkAnswer (letter) {

  var letterInWord = false;

  for(var l = 0; l < digit; l++) {

    if (letter == ilikewords[l]) {
      letterInWord = true;
    }
  }
 
  if (letterInWord) {
    for(var l = 0; l < digit; l++) {
      if (ilikewords[l] == letter) {
        coolStory[l] = letter;
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
  document.getElementById("Output").innerHTML = coolStory.join(" ");
   
  if(letters.toString() == coolStory.toString()) {
    wins++
    document.getElementById("dubs").innerHTML = wins;
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
   
    case 10:
    document.getElementById("myimg").src = "assets/images/hang0.gif"; 
    break;
    case 5:
    document.getElementById("myimg").src = "assets/images/hang1.gif"; 
      break;
      case 4:
    document.getElementById("myimg").src = "assets/images/hang2.gif" 
      break;
    case 3:
    document.getElementById("myimg").src = "assets/images/hang3.gif"; 
      break;
      case 2:
      document.getElementById("myimg").src = "assets/images/hang4.gif" 
        break;
        
      case 1:
      document.getElementById("myimg").src = "assets/images/hang5.gif"; 
        break;
       
  }
  


  

};



  



