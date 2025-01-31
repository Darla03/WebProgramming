let paragraph = document.getElementById("text");

let button = document.getElementById("colorButton"); 

let addTextButton= document.getElementById("addTextButton");

let removeTextButton= document.getElementById("removeTextButton");

let extraTextContainer= document.getElementById("extra-texts");

//function to generate a random color.. 
function getRandomColor(){
    let letters="0123456789ABCDEF";
    let color="#";
    for(let i=0; i <6; i++)
        color+=letters[Math.floor(Math.random()*16)];

    return color;
}

//change text color on button click 

button.addEventListener("click",function(){ //
    paragraph.style.color= getRandomColor(); //when you get that click it calls the function 
});

//mouse over event.. 

button.addEventListener("mouseover",function(){
    paragraph.style.backgroundColor = "lightGray";
});

//double click event
button.addEventListener("dblclick",function(){
    paragraph.style.backgroundColor="transparent";
});

//add a new pargraph
addTextButton.addEventListener("click",function(){
    let newParagraph =document.createElement("p");
    newParagraph.textContent = "This is a dynamically added prargraph";
    newParagraph.style.color =getRandomColor();
    extraTextContainer.appendChild(newParagraph);

});

//remove the last added pargraph 
removeTextButton.addEventListener("click", function(){
    let lastParagraph =extraTextContainer.lastElementChild;
    if(lastParagraph){
    extraTextContainer.removeChild(lastParagraph);
    }
});