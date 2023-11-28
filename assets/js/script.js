
// drop down list of numbers 1 to 128


var contents;
var amountCharacters = document.getElementById("characters");

for (let i=8;i<= 128; i++){
    contents +="<option>"+ i + "</option>";

}

// output the dropdown list number to html
amountCharacters.innerHTML = contents;


// declaring criteria variables
// set lowercase array
var arrayLetters =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k","l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];

//set uppercase array
var arrayLettersUpper = arrayLetters.map(item => item.toUpperCase());

//set symbols array
var arraySymbols = ['!',  "#", "$", "%", "&","'","(", ")", "*", "+","-", ".", "/",":",";", "<","=", ">", "?", "@" , "^", "~", "{", "}"];
;

//set nubmers array
var arrayNumbers = [0,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9];

//button code to generate password

document.getElementById("generate").onclick = function(){
    var selectedChar = document.getElementById("characters").value;
  selectedChar;    
  //get criteria by user and push it to array
    var arrayCriteria = [];
    var criteria = document.querySelectorAll(
      "input[type=checkbox]:checked"
    );

    for (var i = 0; i < criteria.length; i++) {
      arrayCriteria.push(criteria[i].value);
    }
    

   
    
    // declare main password variable
    var passwordArray = [];

      // declaring boolean  values for user criteria selected
    var choseLower = true;
    var choseUpper = true;
    var choseNumber = true;
    var choseSymbol = true;

    //setting boolean value if lowercase chosen

    if (arrayCriteria.includes("lowerCaseCharacters")){
       
        passwordArray = passwordArray.concat(arrayLetters);
        choseLower = true;
    } else {
        
        choseLower = false;
    }

    //setting boolean value if Uppercase chosen


    if (arrayCriteria.includes("upperCaseCharacters")){
      
        passwordArray = passwordArray.concat(arrayLettersUpper);
        choseUpper = true;
    } else {
       
        choseUpper = false;
    }
    
    //setting boolean value if numbers chosen
    if (arrayCriteria.includes("numbersCharacters")){
       
        passwordArray = passwordArray.concat(arrayNumbers);
        choseNumber = true;
    } else {
       
        choseNumber = false;
    }

   //setting boolean value if special characters chosen

    if (arrayCriteria.includes("symbolCharacters")){
        
        passwordArray = passwordArray.concat(arraySymbols);
        choseSymbol = true;
    } else {
       
        choseSymbol = false;
    }

   

    //function to shuffle arrays

        function shuffleArray(array) {
            array = array.sort(() => 0.5 - Math.random());
        
            return array;
        }
     
        //calling the function to shuffle password array
        shuffleArray(passwordArray);

        //function to shuffle array and return one element
       function shuffleArrayReturnOne(array) {
        array = array.sort(() => 0.5 - Math.random());     
        return array[0];
      }

              

    
     //reduce password to amount of characters specified by user
    passwordArray = passwordArray.slice(0, selectedChar);

    //validation variables if password array includes criteria
    var containsLower = passwordArray.some((character) => arrayLetters.includes(character));
    var containsUpper = passwordArray.some((character) => arrayLettersUpper.includes(character));
    var containsNumbers = passwordArray.some((character) => arrayNumbers.includes(character));
    var containsSymbols = passwordArray.some((character) => arraySymbols.includes(character));

      

    // validation:lowercase for both criteria and final password
    //if password does not contain criteria, push at least one of the
    // with the chosed characters to password

    if (choseLower && !containsLower){
        // insert character if chosen but not found
       var newLetter = shuffleArrayReturnOne(arrayLetters);
        passwordArray.splice(0, 1, newLetter);

    }else if (!choseLower && containsLower){
         //remove characters if not chosen
        passwordArray = passwordArray.filter( ( character ) => !arrayLetters.includes( character ) );
        }
        
                

        // validation:upperCase for both criteria and final password

        if (choseUpper && !containsUpper){
              // insert character if chosen but not found
            var newLetter = shuffleArrayReturnOne(arrayLettersUpper);
            passwordArray.splice(1, 1, newLetter);
            }else if (!choseUpper && containsUpper){
                //remove characters if not chosen
                passwordArray = passwordArray.filter( ( character ) => !arrayLettersUpper.includes( character ) );
                }

                       

        // validation: Numbers for both criteria and final password

            if (choseNumber && !containsNumbers){
                  // insert character if chosen but not found
                var newLetter = shuffleArrayReturnOne(arrayNumbers);
                console.log(newLetter);
                passwordArray.splice(2, 1, newLetter);
                }else if (!choseNumber && containsNumbers){
                    //remove characters if not chosen
                    passwordArray = passwordArray.filter( ( character ) => !arrayNumbers.includes( character ) );
                    }

                              

             // validation:Symbols for both criteria and final password

                if (choseSymbol && !containsSymbols){
                      // insert character if chosen but not found
                    var newLetter = shuffleArrayReturnOne(arraySymbols);
                     passwordArray.splice(3, 1, newLetter);
                    }else if (!choseSymbol && containsSymbols){
                       //remove characters if not chosen
                        passwordArray = passwordArray.filter( ( character ) => !arraySymbols.includes( character ) );
                        }
    
            //last shuffle of password
            passwordArray = shuffleArray(passwordArray);     

            // join password array together in a string
            passwordArray = passwordArray.join('');

            //outputting password to html 
            document.getElementById("userPassword").innerHTML = passwordArray;
            console.log(passwordArray);

}
    

