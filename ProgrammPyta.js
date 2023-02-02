
/* 1. Schreiben Sie ein JavaScript-Programm, um den 
Flächeninhalt eines Dreiecks zu ermitteln, dessen drei 
Seitenlängen a, b, c sind.*/

function triangleArea(a, b, c) {
    let semiPerimeter = (a + b + c) / 2;
    let area = Math.sqrt(semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c));
    return area;
  }
  
  let side1 = 3;
  let side2 = 4;
  let side3 = 5;
  console.log(triangleArea(side1, side2, side3));
  

/* 2. Schreiben Sie ein JavaScript-Programm, um den 
String 'Techstarter' periodisch alle 2 Sekunden auf die 
Konsole anzuzeigen.*/

setInterval(function() {
    console.log("Techstarter");
  }, 2000);
  

/*3. Schreiben Sie ein JavaScript-Programm, um die 
Differenz zwischen einer gegebenen Zahl und 13 zu 
erhalten, wenn die Zahl größer als 13 ist, geben Sie die doppelte 
absolute Differenz zurück.*/

function differenceFrom13(num) {
    if (num > 13) {
      return 2 * Math.abs(num - 13);
    } else {
      return num - 13;
    }
  }
  
  let number = 20;
  console.log(differenceFrom13(number));
  

/*4. Schreiben Sie ein JavaScript-Programm, um zu 
prüfen, ob zwei gegebene Integer-Werte im 
Bereich 50..99 (einschließlich) liegen. Geben Sie wahr 
zurück, wenn einer von ihnen in dem genannten Bereich liegt.*/

function isWithinRange(a, b) {
    return (a >= 50 && a <= 99) || (b >= 50 && b <= 99);
  }
  
  let num1 = 60;
  let num2 = 70;
  console.log(isWithinRange(num1, num2));
  

/*Aufg.5:Schreibe JS-Prog., um jede n'te Element im Array zu erhalten*/


function getNthElement(array, n) {
    let result = [];
    for (let i = n - 1; i < array.length; i += n) {
      result.push(array[i]);
    }
    return result;
  }
  
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let n = 3;
  console.log(getNthElement(arr, n));

  /*6. Schreiben Sie ein JavaScript-Programm, um 
  herauszufinden, ob ein Wort ein Palindrom ist, oder 
  nicht. (z. B. Madam, Anna, Otto)*/

  function isPalindrome(word) {
    let wordLowerCase = word.toLowerCase();
    let wordReverse = wordLowerCase.split("").reverse().join("");
    return wordLowerCase === wordReverse;
  }
  
  let testWord = "Madam";
  console.log(isPalindrome(testWord));
  
  /*7. Schreiben Sie eine JavaScript-Funktion, die 
  alle Kombinationen eines Strings generiert. Example 
  string: 'dog'; Expected Output: d,o,do,g,dg,og,dog.*/

  function generateCombinations(str) {
    let combinations = [];
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j <= str.length; j++) {
        combinations.push(str.slice(i, j));
      }
    }
    return combinations;
  }
  
  let testString = "dog";
  console.log(generateCombinations(testString));
  
/*8. Schreiben Sie ein JavaScript-Programm, um 
die nicht eindeutigen Werte in einem 
Array herauszufiltern. (Beispiel-Array: [1, 2, 2, 3, 4, 4, 5]).*/

function removeDuplicates(arr) {
    return Array.from(new Set(arr));
  }
  
  let testArray = [1, 2, 2, 3, 4, 4, 5];
  console.log(removeDuplicates(testArray));
  

  function getFirstElements(arr, n = 1) {
    return arr.slice(0, n);
  }
  
  /*9. Schreiben Sie eine JavaScript-Funktion, um 
  das erste Element eines Arrays abzurufen. Das Übergeben 
  eines Parameters 'n' gibt die ersten 'n' Elemente des Arrays zurück.*/
 
  let testIIArray = [7,9,0,-2];
  console.log(getFirstElements(testIIArray));
  console.log(getFirstElements(testIIArray, 3));
  
  /*10. Schreiben Sie ein JavaScript-Programm, um ein Array zu mischen.*/
  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  
  let testVArray = [1, 2, 3, 4, 5];
  console.log(shuffleArray(testArray));
  