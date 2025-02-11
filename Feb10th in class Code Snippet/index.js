//Function if number is even or odd 
function isEven(n) {
    return (n % 2 === 0);
}

function isOdd(n) {
    return (n % 2 !== 0);
}

console.log(isEven(7));

console.log(isOdd(6));
console.log(isEven(6));

//Reverse string 

let reverse = "tech"
const output = reverse.split('').reverse().join('');
console.log(output);

//on click button background change 


document.getElementById("button").addEventListener("click",()=>{
    const button = document.createElement("button");
    button.textContent = "Change Background Color";
    document.body.appendChild(button);

    button.addEventListener("click", function () {
        document.body.style.backgroundColor = "orange";
    });
});

//function that takes an array of numbers and returns max value

const max = [20,45,65,78,2,5,6,7,8];
console.log(Math.max(...max));

//Counts the number of vowels in a string 

const countVowels = (s) =>{
    const vowel = "aeiouAEIOU";
    let count = 0;

    for( const char of s){
        if(vowel.includes(char)){
            count++;
        }
    }
    return count;
};

const s = "ate cereal";
console.log(countVowels(s));


