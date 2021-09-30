var css = document.querySelector("h4");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var ratio = document.querySelector(".ratio");
var type = document.querySelector("#type");
var gradient = document.getElementById("gradient");
console.log(ratio.value);

function setGradient() {
    if(type.value == "linear-gradient"){
        gradient.style.background = 
        "linear-gradient("
       + ratio.value + "deg"
        + ", " 
        + color1.value 
        + ", " 
        + color2.value 
        + ")";
        css.innerText = gradient.style.background + ";";
    }
    else{
        gradient.style.background = 
        "radial-gradient("
        + color1.value 
        + ", " 
        + color2.value 
        + ")";
        css.innerText = gradient.style.background + ";";
       }
}

console.log(type.value, "3");
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
ratio.addEventListener("input", setGradient);
type.addEventListener("input", setGradient);

select('#switch').addEventListener('click', () => {
    // select('body').toggleClass('dark')

    // console.log(select('body'))
    storage('set', "mode", checkForClass('body', 'dark') ? 'light' : 'dark')
    select('body').css.toggle('dark')
})