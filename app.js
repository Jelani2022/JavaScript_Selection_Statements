console.log("Hello World!\n==========\n");
console.log("Follow the steps in the README.md file to complete the exercises:\n==========\n");

// Exercise 1
let magicNumber = 3
let guessedNumber = prompt("What's the magic number?")
//guessedNumber = parsint(guessedNumber)

//if (isNaN(guessedNumber)){
//    console.log("invalid input. give me a real number")
//}

if (guessedNumber == magicNumber) {
    alert("Congratulations! You guessed it!")
    console.log("Congratulations! You guessed it!");}
    else if (guessedNumber > magicNumber){
        alert("That's too high...Try again")
    console.log("That's too high...Try again");}
    else if (guessedNumber < magicNumber){
        alert("That's too low...Try again")
        console.log("That's too low...Try again")
    }

// Exercise 2
let birthMonth = prompt("What month were you born?")


 switch (birthMonth.toLowerCase){
     case "janurary":
     case "feburary":
        console.log("You are a Winter baby")
         break;
     case "march":
        console.log(" You are a Spring baby")
         break;
     case "april":
        console.log("You are a Spring baby")
         break;
     case "may":
        console.log("You are a Spring baby")
         break
     case "june":
        console.log("You are a Summer baby")
         break
     case "july":
        console.log("You are a Summer baby")
         break
     case "august":
        console.log("You are a Summer baby")
         break
     case "september":
        console.log("You are an Autumm baby")
         break
     case "october":
        console.log("You are an Autumm baby")
         break
     case "november":
        console.log("You are an Autumm baby")
         break
     case "december":
        console.log("You are a Winter baby")
         break
 }

 //Exercise 3

 let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

if (typeId == "01") {
  type = "Tank top";
} else if (typeId == "02") {
  type = "T-Shirt";
} else if (typeId == "03") {
  type = "Long Sleeve";
} else if (typeId == "04") {
  type == "Sweat Shirt";
} else {
  type = "Other";
}

if (colorId == "BL") {
  color = "Black";
} else if (colorId == "BL") {
  color = "Blue";
} else if (colorId == "RD") {
  color = "Red";
} else if (colorId == "PU") {
  color = "Purple";
} else {
  color = "White";
}

if (sizeId == "S") {
  size = "Small";
} else if (sizeId == "M") {
  size = "Medium";
} else if (sizeId == "L") {
  size = "Large";
} else if (sizeId == "XL") {
  size = "Extra Large";
} else {
  size = "One Size Fits All";
}

console.log(`Product: ${size} ${color} ${type}`);