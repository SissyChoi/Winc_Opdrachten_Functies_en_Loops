// Checking if a number is big 

const checkNumber = function(numbers) {
    if (numbers > 100) {
      return "True";
    } else {
      return "False";
    }
  };

  console.log(checkNumber(101));

//This function produce someting.

// Bouncer at a club

const brendaChecks = function(maxPeople, currentAmountPeople, agePerson) {
    if (agePerson < 18) {
        return "This is a club for adults";
    }

    if (currentAmountPeople >= maxPeople) {
        return "It's too busy now, come back later";
    } 
    
    else {
        return "Come in";
    }
};

console.log(brendaChecks(500, 50, 17)); 
console.log(brendaChecks(500, 501, 18)); 
console.log(brendaChecks(500, 480, 25));
console.log(brendaChecks(500, 480, 17));


//This function produce someting.

//Calculation the average

const calculateAverage = function (number1, number2, number3, number4, number5) {
    const totalSum = (number1 + number2 + number3 + number4 + number5);
    const average = totalSum / 5;
    return average;
};

;
console.log(calculateAverage(2,4,6,8,10));
console.log(calculateAverage(10,20,30,40,50));
