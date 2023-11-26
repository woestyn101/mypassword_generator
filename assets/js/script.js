
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
   

    if (arrayCriteria.includes("upperCaseCharacters")){
        console.log("yes ABC");
        passwordArray = passwordArray.concat(arrayLettersUpper);
        choseUpper = true;
    } else {
        console.log("no ABC")
        choseUpper = false;
    }
    

    if (arrayCriteria.includes("numbersCharacters")){
        console.log("yes 1,2,3");
        passwordArray = passwordArray.concat(arrayNumbers);
        choseNumber = true;
    } else {
        console.log("no 1,2,3")
        choseNumber = false;
    }

   

    if (arrayCriteria.includes("symbolCharacters")){
        console.log("yes $");
        passwordArray = passwordArray.concat(arraySymbols);
        choseSymbol = true;
    } else {
        console.log("no $")
        choseSymbol = false;
    }

   

    //function to shuffle arrays

        function shuffleArray(array) {
            array = array.sort(() => 0.5 - Math.random());
        
            return array;
        }
     
        shuffleArray(passwordArray);

        //function to shuffle array and return one element
       function shuffleArrayReturnOne(array) {
        array = array.sort(() => 0.5 - Math.random());     
        return array[0];
      }

         //reduce password to amount of characters specified by user

      

    
     //reduce password to amount of characters specified by user
    passwordArray = passwordArray.slice(0, selectedChar);

    //validation variables
    var containsLower = true;
    var containsUpper = true;
    var containsNumbers = true;
    var containsSymbols = true;

    // validation for lowerCase letters
    if (passwordArray.some((character) => arrayLetters.includes(character))){
        console.log("contains abc");
        containsLower = true;
    }  else {
        containsLower= false;
    }
   

    // validation:lowercase for both criteria and end password

    if (choseLower && !containsLower){
        console.log("chose but does not contain lower")
       var newLetter = shuffleArrayReturnOne(arrayLetters);
       console.log(newLetter);
       passwordArray.splice(0, 1, newLetter);
    }else if (!choseLower && containsLower){
        console.log("not chose lower but contains lower")
        passwordArray = passwordArray.filter( ( character ) => !arrayLetters.includes( character ) );
        }
        
        // validation for upperCase letters
        if (passwordArray.some((character) => arrayLettersUpper.includes(character))){
            console.log("contains ABC");
            containsUpper = true;
        }  else {
            containsUpper= false;
        }
        

        // validation:upperCase for both criteria and end password

        if (choseUpper && !containsUpper){
            console.log("chose but does not contain Upper")
            var newLetter = shuffleArrayReturnOne(arrayLettersUpper);
            console.log(newLetter);
            passwordArray.splice(1, 1, newLetter);
            }else if (!choseUpper && containsUpper){
                console.log("not chose Upper but contains Upper")
                passwordArray = passwordArray.filter( ( character ) => !arrayLettersUpper.includes( character ) );
                }

                // validation for numbers
                if (passwordArray.some((character) => arrayNumbers.includes(character))){
                    console.log("contains 123");
                    containsNumbers = true;
                }  else {
                    containsNumbers= false;
                }
        

        // validation: Numbers for both criteria and end password

            if (choseNumber && !containsNumbers){
                console.log("chose but does not contain Numbers")
                var newLetter = shuffleArrayReturnOne(arrayNumbers);
                console.log(newLetter);
                passwordArray.splice(2, 1, newLetter);
                }else if (!choseNumber && containsNumbers){
                    console.log("not chose Number but contains Number")
                    passwordArray = passwordArray.filter( ( character ) => !arrayNumbers.includes( character ) );
                    }

                       // validation for Symbols
                if (passwordArray.some((character) => arraySymbols.includes(character))){
                    console.log("contains %");
                    containsSymbols = true;
                }  else {
                    containsSymbols= false;
                }
        

             // validation:Symbols for both criteria and end password

                if (choseSymbol && !containsSymbols){
                    console.log("chose but does not contain Symbol")
                    var newLetter = shuffleArrayReturnOne(arraySymbols);
                    console.log(newLetter);
                    passwordArray.splice(3, 1, newLetter);
                    }else if (!choseSymbol && containsSymbols){
                        console.log("not chose Symbol but contains Symbol")
                        passwordArray = passwordArray.filter( ( character ) => !arraySymbols.includes( character ) );
                        }
    
    
    // join password array together in a string
    passwordArray = passwordArray.join('');
    document.getElementById("userPassword").innerHTML = passwordArray;
    console.log(passwordArray);

}
    

// sources:

//https://stackoverflow.com/questions/19957348/remove-all-elements-contained-in-another-array