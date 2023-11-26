
// drop down list of numbers 1 to 1128


var contents;
var amountCharacters = document.getElementById("characters");

for (let i=8;i<= 128; i++){
    contents +="<option>"+ i + "</option>";

}
amountCharacters.innerHTML = contents;
// console.log("this is working:");

// declaring criteria variables

var arrayLetters =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k","l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];


var arrayLettersUpper = arrayLetters.map(item => item.toUpperCase());

var arraySymbols = ['!',  "#", "$", "%", "&","'","(", ")", "*", "+","-", ".", "/",":",";", "<","=", ">", "?", "@" , "^", "~", "{", "}"];
;

var arrayNumbers = [0,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9];

//button code to generate password

document.getElementById("generate").onclick = function(){
    var selectedChar = document.getElementById("characters").value;
    document.getElementById("charactersSelected").innerHTML = selectedChar;    

    var arrayCriteria = [];
    var criteria = document.querySelectorAll(
      "input[type=checkbox]:checked"
    );

    for (var i = 0; i < criteria.length; i++) {
      arrayCriteria.push(criteria[i].value);
    }
    console.log(arrayCriteria);

    // document.getElementById("userCriteria").innerHTML = arrayCriteria;
    
    
    var passwordArray = [];

    var choseLower = true;
    var choseUpper = true;
    var choseNumber = true;
    var choseSymbol = true;

    if (arrayCriteria.includes("lowerCaseCharacters")){
        console.log("yes a,b,c");
        passwordArray = passwordArray.concat(arrayLetters);
        choseLower = true;
    } else {
        console.log("no a,b,c")
        choseLower = false;
    }
   console.log(choseLower);
    console.log(passwordArray);

    if (arrayCriteria.includes("upperCaseCharacters")){
        console.log("yes ABC");
        passwordArray = passwordArray.concat(arrayLettersUpper);
        choseUpper = true;
    } else {
        console.log("no ABC")
        choseUpper = false;
    }
    console.log(choseUpper);

    if (arrayCriteria.includes("numbersCharacters")){
        console.log("yes 1,2,3");
        passwordArray = passwordArray.concat(arrayNumbers);
        choseNumber = true;
    } else {
        console.log("no 1,2,3")
        choseNumber = false;
    }

    console.log(choseNumber);

    if (arrayCriteria.includes("symbolCharacters")){
        console.log("yes $");
        passwordArray = passwordArray.concat(arraySymbols);
        choseSymbol = true;
    } else {
        console.log("no $")
        choseSymbol = false;
    }

    console.log(choseSymbol)

    //function to shuffle arrays

        function shuffleArray(array) {
            array = array.sort(() => 0.5 - Math.random());
        
            return array;
        }
     
        shuffleArray(passwordArray);

         //reduce password to amount of characters specified by user

      

    console.log(passwordArray);
    console.log(selectedChar);
     //reduce password to amount of characters specified by user
    passwordArray = passwordArray.slice(0, selectedChar);

    // validation for lowerCase letters
    
    
    // join password array together in a string
    passwordArray = passwordArray.join('');
    document.getElementById("userPassword").innerHTML = passwordArray;
    console.log(passwordArray);

}
    