const numbers = [1,2,3,4,5,6];
let temp = []
for(let i = 0; i < numbers.length; i++){
    const element =  numbers[i];
    const sum = element + 1;
    temp.push(sum)
    
}

// console.log(temp);

// map 

// map always returns a array

// const newArray = numbers.map(value => value + 1);
// console.log(newArray)

// const newArray = numbers.map(number => console.log(number));

// Single line 
const newArray = numbers.map(number => number + 1)
// console.log(newArray)

// multiple Line 
const newArray1 = numbers.map(number => {
    return number + 1
})
// console.log(newArray1)

const number1 = [1,2,3,4,5,6];
// single line 
// const squareArray = number1.map(element => element * element);
// console.log(squareArray);

// multi line 
const squareArray = number1.map(element => {
    return element * element;
})
// console.log(squareArray);




const friends = ["rahim", "karim", "jabbar", "borkot"];

const newFriends = friends.map((element, index) => {
    // console.log(index);
    // console.log(element);  
})