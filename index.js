const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", function(e){
    if(e.target.classList.contains("add")){
        count.innerHTML++;
    };

    if(e.target.classList.contains("subtract")){
        count.innerHTML--;
    };

    if(e.target.classList.contains("reset")){
        count.innerHTML=0;
    };
});
