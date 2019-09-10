const button=document.getElementById("rollButton")
let totalScore = 0;

const diceImage=document.getElementById("dice")

const score = document.getElementById("score")
const title = document.getElementById("title1")




button.addEventListener("click",()=> {
    const randomNumber= Math.floor(Math.random()*6+1)
    console.log(randomNumber)
    totalScore=totalScore+randomNumber
    diceImage.src=`./img/dice${randomNumber}.png`
    score.textContent = totalScore
    title.textContent = "The Dice Game !"

    if (totalScore>=21) {
        title.textContent="You are Winner !"
        totalScore=0

    }

    if (randomNumber==1) {
        title.textContent="You lost!"
        totalScore=0
    }
})

