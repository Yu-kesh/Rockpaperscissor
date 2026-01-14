function machinePlay(){
    const choices=["rock", "paper","scissor"];
   const randomIndex= Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
};
console.log(machinePlay());
const buttonRock= document.querySelector("#rock");
const buttonPaper= document.querySelector("#paper");
const buttonScissor= document.querySelector("#scissor");
const result1= document.querySelector("#result1");
const result2= document.querySelector("#result2");

buttonRock.addEventListener("click", ()=> {
    const play=machinePlay()
    if(play==="rock"){
        result1.textContent="You choose Rock. Machine also choose Rock"
        result2.textContent="You tie."
        
    }else if(play==="paper"){
         result1.textContent="You choose Paper. Machine choose Rock"
        result2.textContent="You win."
        alert("you won")

    }else{
        result1.textContent="You choose scissor. Machine choose Rock"
        result2.textContent="You loose."
       
    }
});

buttonPaper.addEventListener("click", ()=> {
    play=machinePlay()
    if(play==="paper"){
        result1.textContent="You choose Paper. Machine also choose Paper"
        result2.textContent="You tie."
        
    }else if(play==="Rock"){
         result1.textContent="You choose Rock. Machine choose Paper"
        result2.textContent="You Loose."

    }else{
        result1.textContent="You choose scissor. Machine choose Paper"
        result2.textContent="You Win."
      
    }
});

buttonScissor.addEventListener("click", ()=> {
    play=machinePlay()
    if(play==="scissor"){
        result1.textContent="You choose Paper. Machine also choose scissor"
        result2.textContent="You win."
        
    }else if(play==="Rock"){PaperPaper
         result1.textContent="You choose Rock. Machine choose scissor"
        result2.textContent="You Win."

    }else{
        result1.textContent="You choose scissor. Machine choose scissor"
        result2.textContent="You Tied."
       
    }
});