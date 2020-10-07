//IMAGE TOGGLE
//....................................................
    //will toggle between 2 images depending on if a string contains a certain word
    function stringToggle(imageSourceNode, string,splitChar, certainWord, imageOne,imageTwo){
        if (string.split(splitChar || " ").includes(certainWord)){
            imageSourceNode.src = imageTwo;   
        }
        else {
            imageSourceNode.src = imageOne;
        }
    }

//CONVERT MILES TO KILOMETERS
//....................................................
    function LengthConverter(milesVal,qrySlctrItem) {
        document.querySelector(qrySlctrItem).innerHTML=milesVal/0.62137;
    }


//COUNT NUMBER OF VOWELS IN STRING(S)
//....................................................
    function getCount (str){
        var vowelsCount = 0;
    
        for (var i = 0; i < str.length; i++) {
            if ( (str[i] === "a") || (str[i] === "e" ) || (str[i] === "i" ) || (str[i] === "o" ) || (str[i] === "u" ) ) {
                ++vowelsCount
            }
            if ( (str[i] === "A") || (str[i] === "E" ) || (str[i] === "I" ) || (str[i] === "O" ) || (str[i] === "U" ) ) {
                ++vowelsCount
            }
        }
    
        return vowelsCount; 
    }

//REPEAT STRING (s) A NUMBER (n) of times
//....................................................
    function repeatStr (n, s) {

        var repeatArray = [];
        var string = "";
        
        for (var i = 0; i < n; i++){
            repeatArray.push(s);
            var string = string + repeatArray.toString();
            repeatArray.pop(s);
        }
        
        return string;
    }

//REMOVE SPACE FROM SENTENCE
//....................................................
    function noSpace(x){

        var firstArray = [];
        var noStringArray = "";
        
        for (var i = 0; i < x.length; i++){
            firstArray.push(x[i]);
            if (firstArray[i] === " "){
                delete firstArray[i];
            } 
        }
        
        noStringArray = firstArray.toString();
        var oldWord = noStringArray;
        var newWord = "";
        
        for (var i = 0; i < oldWord.length; i++){
            if (oldWord[i] === ","){
        
            }
            else{
                    newWord = newWord + oldWord[i];
                }
        }
        
        return newWord;
    }

//REVERSE STRING
//....................................................
    function solution(str){

        var stringArray =[];
        
        for (var i=0; i< str.length; i++){
            stringArray.push(str[i]);
        }
        
        var newStringArray = stringArray.reverse();
        var reversedString = newStringArray.join("");
        
        return reversedString;
    }

//FIND THE FIRST NON-REPEATING CHARACTER
//....................................................
    //if all characters are the same return ""
    //both capital and lower case letters are considered equal
    function firstNonRepeatingLetter(string){
        string = string.split("");
        var bingo = 0;
        var counter = 1;
        var special = "";
        
        //if every item in array is the same
        if (string.every( (val, i, arr) => val === arr[0] === true && string.length > 1)){
            special = ""
        }
        else{
            string.forEach( (item) => { 
                counter = 1;
        
            for (var i = 0; i < string.length; i++){ 
                var lastItem = string.slice(-1)[0];
                lastItem = [lastItem.toUpperCase(),lastItem.toLowerCase()];
                var currentChar = [string[i].toUpperCase(),string[i].toLowerCase()];
            
                //if string only contains 1 character
                if(string.length === 1){
                    special = string[i];
                }
                //first iteration of item itself
                if ( (item === currentChar[0] || item === currentChar[1]) && counter < 2){
                    counter++ 
                    bingo = item;
                    if ((string.lastIndexOf(currentChar[0]) + string.lastIndexOf(lastItem[0])+2==string.length*2 && i === string.length-1 || string.lastIndexOf(currentChar[1]) + string.lastIndexOf(lastItem[1])+2==string.length*2 && i === string.length-1)){
                        if (counter === 2 && bingo != 0 && special == ""){
                            special = bingo;
                        }
                    }    
                }
                //if item is repeated more than once
                else if (item === currentChar[0] || item === currentChar[1] && counter >= 2) {
                    counter++
                    bingo = 0;
                    break;
                }
                //if at last item in array
                else if ((string.lastIndexOf(currentChar[0]) + string.lastIndexOf(lastItem[0])+2==string.length*2 && i === string.length-1 || string.lastIndexOf(currentChar[1]) + string.lastIndexOf(lastItem[1])+2==string.length*2 && i === string.length-1)){ 
                    if (counter === 2 && bingo != 0 && special == ""){ 
                        special = bingo;
                    }
                }   
            }
            });
        }
        return special;
    }

//MAKE THE MEXICAN WAVE WITH A sTrInG iNpUt
//................................................................
function wave(str){

    waveArray =[];
    var splitString = str.split("");

        for (var i = 0; i < splitString.length; i++){
            if(splitString[i].toUpperCase() != splitString[i].toLowerCase() ){
                var thisSplitString = str.split(""); //
                var currentString = thisSplitString[i].toUpperCase().toString(); //turn letter into upcase then convert to string
                thisSplitString[i] = currentString //replace relevant letter with capitalised letter
                waveArray.push(thisSplitString.join("")); // push new instance of string to waveArray
            }
        }

    return waveArray;
}
