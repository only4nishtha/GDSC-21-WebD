var css = document.querySelector("h4");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var gradient = document.getElementById("gradient");

function setGradient() {
 gradient.style.background = 
 "linear-gradient(45deg, " 
 + color1.value 
 + ", " 
 + color2.value 
 + ")";
 css.textContent = gradient.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

select('#switch').addEventListener('click', () => {
    // select('body').toggleClass('dark')

    // console.log(select('body'))
    storage('set', "mode", checkForClass('body', 'dark') ? 'light' : 'dark')
    select('body').css.toggle('dark')
})


// Wait for document to load
document.addEventListener("DOMContentLoaded", function(event) {
document.documentElement.setAttribute("data-theme", "light");

// Get our button switcher
var themeSwitcher = document.getElementById("theme-switcher");
            
// When our button gets clicked
themeSwitcher.onclick = function() {
    // Get the current selected theme, on the first run
    // it should be `light`
    var currentTheme = document.documentElement.getAttribute("data-theme");
            
    // Switch between `dark` and `light`
    var switchToTheme = currentTheme === "dark" ? "light" : "dark"
            
    // Set our currenet theme to the new one
    document.documentElement.setAttribute("data-theme", switchToTheme);
    }
});