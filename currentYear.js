//this function returns the current year (eg '2022') as iether a string or number - depending on the argument provided


function currentYear(valueType = "string"){
    //retrieve date via native JS and convert to string
    var date = new Date();
    date = date.toString();

    //create array from the date string
    var dateArray = date.split(" ");
    
    //retrieve the date from the date array created above
    var thisYear = dateArray[3];

    //depending on the argument, return either a string or number
    if(valueType === "string"){
        return thisYear;
    }
    else if(valueType === "number"){
        return Number(thisYear);
    }
}
