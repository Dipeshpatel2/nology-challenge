// Challenge 1- Check if a number is positive or negative

function checkPositiveNegative(event){
    const value = event.target.value;

    if (value > 0){
        alert("Number is Positive")
    } else if (value < 0) {
        alert("Number is Negative")
    }
}

// Challenge 1- Check if a number is positive/negative

const isNumberPositive = (value) => {

	if (value > 0){
        console.log("True")
    } else if (value < 0) {
        console.log("False")
    }
}	

isNumberPositive (-1)
isNumberPositive (10)

// Challenge 2-Calculate number of days to age
function calculateDaysToAge(event) {
    const currentDays = event.target.value;
    

    const yearsOld = currentDays / 365;
    alert(yearsOld+"  Years Old")
}

// Challenge 2

const convertDaysToAge = (days) => {
	const age = days / 365;
	console.log(age+ " Years old")
}

convertDaysToAge(3650)
convertDaysToAge(6570)

//Challenge 3 - Write a function that takes three numbers and returns the largest of the three numbers

	let number1, number2, number3;
	number1 = 2
	number2= 1
	number3 = 4

		if(number1>number2 && number1>number3)
		{
		    console.log(number1+" is the largest");
		}
		else if(number2>number1 && number2>number3)
		{
			console.log(number2+" is the largest");
		}
		else if(number3>number1 && number3>number1)
		{
			console.log(number3+" is the largest");
		}
	
// challenge 3

const getLargestNumber = [6,2,3];
	console.log(Math.max(...getLargestNumber));

// Challenge 4 - Write a function that takes the last name in an array

const getLastName = (names) => {
	const last = names[names.length - 1];
	return last;
  };
  
  names = ["Charlie", "Rob", "Andy"];
 

  console.log(getLastName(names));


// Challenge 5
// Write a function that takes an array of numbers and returns true if all the numbers are positive.
// It should return false if there are one or more negative numbers in the array

const allNumbersPositive = (numbersArray) => {
 for (let index = 0; index < numbersArray.length; index++) {
  
  console.log(numbersArray[index]);

  if (numbersArray[index] < 0) {
   console.log("All Positive: False");
   return false;
  } else if (index == numbersArray.length - 1) {
   //If it gets to the end of the array without finding a negative, each array element is therefore positive
   console.log("All Positive: True");
   return true;
  } else if (numbersArray[index] == 0) {
   console.log(
    "0 is neither positive or negative, and hence will be skipped."
   );
  }
 }
};
console.log(allNumbersPositive([9, 7, 5]));

// Challenge 5

const positiveNumbers = (numbArray) => {
	for (let index = 0; index < numbArray.length; index++) {

		if (numbArray[index] > 0) {
			console.log("TRUE")
		}
        else if (numbArray[index] < 0){
            console.log("FALSE")
        }
	}
}
const numbArray = [2, 4, -1]

console.log(positiveNumbers((numbArray)))