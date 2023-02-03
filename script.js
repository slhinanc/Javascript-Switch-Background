
 
// Random


let colors = ["blue","pink","green","yellow","purple", "lightgreen","lightblue","lightred","crimson"];

let button = document.querySelector("#btn");

button.addEventListener("click", function(){

    let randomColor = colors[Math.floor(Math.random () * colors.length)];

    document.body.style.backgroundColor = randomColor;

    console.log(randomColor);
       
})



// Orderly

let orderColors = ["blue","pink","green","yellow","purple", "lightgreen","lightblue","gray","crimson"];

let btn = document.querySelector("#button2");

let index = -1;

btn.addEventListener("click", function(){

    index++;

    if(index >= orderColors.length){
        index = 0;
    }

    document.body.style.backgroundColor = orderColors[index];

    console.log(orderColors[index])
});



