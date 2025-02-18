document.getElementById("fetchUsers").addEventListener("click", function(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then(data=>{
        let userList = document.getElementById("userList");
        userList.innerHTML="";

        data.forEach(user=>{
            let li =document.createElement("li");
            li.innerHTML=`<strong>${user.username}</strong>`;
            userList.appendChild(li);
        });
    })
    .catch(error=> console.error("error Fetching data ", error));
});


document.getElementById("fetchCompany").addEventListener("click", function(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then(data=> {
        let companyList = document.getElementById("companyList");
       companyList.innerHTML="";

        data.forEach(user=> {
            let li =document.createElement("li");
            li.innerHTML= `<strong>${user.company.name}</strong>`;
           companyList.appendChild(li);
        });
    })
    .catch(error=> console.error("error Fetching data ", error));
});

