var css = document.querySelector("h4");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var ratio = document.querySelector(".ratio");
var type = document.querySelector("#type");
var gradient = document.getElementById("gradient");

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

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
ratio.addEventListener("input", setGradient);
type.addEventListener("input", setGradient);

function copy() {
    let text = css.innerText;
    let input = document.createElement('input');
    input.setAttribute('value', text);
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    alert('Copied Colour Code: \n' + text);
}

select('#switch').addEventListener('click', () => {
    // select('body').toggleClass('dark')

    // console.log(select('body'))
    storage('set', "mode", checkForClass('body', 'dark') ? 'light' : 'dark')
    select('body').css.toggle('dark')
})
