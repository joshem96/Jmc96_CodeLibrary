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