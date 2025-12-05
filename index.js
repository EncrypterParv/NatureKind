const fadeElements= document.querySelectorAll(".fade-in")
function handleScroll(){
    fadeElements.forEach(el=>{
        const rect= el.getBoundingClientRect().top;
        if(rect < window.innerHeight-80){
            el.classList.add("visible");
        }
        else{
            el.classList.remove("visible")
        }
    })
}
window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);