//1.push or add data end of array
let ourArray = ["Stimson", "J", "cat"];
ourArray.push(["happ", "joy"]);
console.log(ourArray);
//manipulating array remove
//remove starting at the end
//2. pop remove lat element of array
let ourArray1 = [1,2,3];
let removedFromOurArray = ourArray.pop();
console.log(ourArray1);

let myArray = [["John,23"], ["cat", 2]];
let removedFromMyArray = myArray.pop();
console.log(myArray);

//3.using shift remove the first element
let myArray1 = [["John,23"], ["cat", 2]];
let removedFromMyArray1 = myArray.shift();
console.log(myArray);

//4.unshift add elements to the beginning of array same as push
let ourArray2 = ["Stimpson", "J", "cat"];
ourArray.unshift("happy");
console.log(ourArray);
