let guessvalue=document.body.querySelector('.guessvalue')
let button=document.body.querySelector('button')
let lowOrhigh=document.body.querySelector('.lowOrhigh')
let result=document.body.querySelector('.result')
let previousguess=document.body.querySelector('.previousguess')
let attempt=1;
let resetbutton;
let randomNumber = Math.floor(Math.random() * 100) + 1;
function checkGuess(){
    let value=Number(guessvalue.value)
    if(attempt==1){
        previousguess.textContent='previous guess: '
    }
    previousguess.textContent+=value +' '
    if(value===randomNumber){
        result.textContent="Congratulations!! you got it right"
        result.style.backgroundColor='green';
        lowOrhigh=''
        setGameover()
    }else if(attempt===10){
        result.textContent = '!!!GAME OVER!!!';
        setGameover();
    }else{
        result.textContent='!!Wrong'
        result.style.backgroundColor='red'
        if(value < randomNumber){
            lowOrhigh.textContent="guess was too low"
        }else{
            lowOrhigh.textContent="guess was too high"
        }
    }
    attempt++;
    guessvalue.textContent=''
    guessvalue.focus()
}
button.addEventListener('click',checkGuess)
function setGameover(){
    guessvalue.disabled=true
    button.disabled=true
    resetbutton=document.createElement('button')
    resetbutton.textContent='start new game'
    document.body.append(resetbutton)
    resetbutton.addEventListener('click',resetGame)
}
function resetGame(){
    attempt=1;
    let para=document.querySelectorAll('p')
    for(let i=1;i<para.length;i++){
        para[i].textContent=''
    }
    guessvalue.disabled=false
    button.disabled=false
    guessvalue.value=''
    guessvalue.focus()
    resetbutton.parentNode.removeChild(resetbutton)
    result  .style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 100) + 1;
}
