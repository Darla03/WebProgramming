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