const num1=Math.ceil(Math.random()*10)
const num2=Math.ceil(Math.random()*10)


const formEl=document.getElementById("form");
const inputEl=document.getElementById("input");
const scoreEl=document.getElementById("score");




let score=JSON.parse(localStorage.getItem("score"))

if(!score){
    score=0;
}

scoreEl.innerText=`score:${score}`


const questionEl=document.getElementById("question").innerText=`what is ${num1} multiply by ${num2}?`; 


//question is created but we need ans also
const correctAns=num1*num2;

//now we have to get numbers from the users
formEl.addEventListener("submit",()=>{
    const userAns=+inputEl.value;
    

    if(userAns===correctAns){
        score++;
        updateLocalStorage()
    }
    else{
        score--
        updateLocalStorage()
    }
})

function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score));
}


















