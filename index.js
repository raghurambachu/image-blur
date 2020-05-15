let spacingRangeDOM = document.querySelector(".spacing-range");
let blurRangeDOM = document.querySelector(".blur-range");
let baseColorDOM = document.querySelector(".base-color")
let root = document.documentElement;

spacingRangeDOM.addEventListener("change", function(e){
    root.style.setProperty("--spacing",`${e.target.value}px`);
})

blurRangeDOM.addEventListener("change", function(e){
    root.style.setProperty("--blur",`${e.target.value}px`);
})

baseColorDOM.addEventListener("change", function(e){
    root.style.setProperty("--base",`${e.target.value}`);
})