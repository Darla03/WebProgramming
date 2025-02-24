//get elements.. 

let output= document.getElementById("output");

//1.Arrow functions 

document.getElementById("arrowButton").
addEventListener("click",()=>{
    let greet = name => "Hello, " +name+ '!';
    output.textContent = greet("student");
});

//2. Promise Example 

document.getElementById("promiseButton").addEventListener("click",()=>{
    function fetchData(){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
            resolve("Data fetched using Promise !");
        }, 2000);
    });

    }

    fetchData().then(response=>{output.textContent = response;
    });
});

//3. Async/Await

document.getElementById("asyncButton").addEventListener("click",async() =>{
    function fetchData(){
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve("data fetched using Async/await!");
        }, 2000);

    });
}
    let response = await fetchData();
    output.textContent = response; 
});

//on click button background change 



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

