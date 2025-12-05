

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
document.querySelectorAll(".add-cart").forEach(e=>{
    e.addEventListener("click", ()=>{
        showcartpopup();
    })
})
function showcartpopup(){
    const popup= document.createElement("div");
    popup.className= "cart-popup";
    popup.innerText= "Added To Cart !";
    document.body.appendChild(popup)

    setTimeout(()=>{
        popup.style.opacity= "0";
        popup.style.transform= "translateY(20px)";
    }, 1400);

    setTimeout(() => {
        popup.remove()
    }, 2000);
}