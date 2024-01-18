const motivatingLines = [
    "You're doing great!",
    "Keep up the good work!",
    "Success is a journey, not a destination.",
    "Believe in yourself!",
    "Every small step counts.",
    "You've got this!",
    "Stay positive and keep moving forward."
];


var para2 = document.querySelector('#para2');
var para = document.querySelector('#para');


var randomNumber2 = Math.floor(Math.random()*100);

var numSection = document.querySelector('#randomNum')
numSection.textContent = randomNumber2;
var chances = 3;



document.querySelector('#btn1').addEventListener("click",() =>{
    var input = parseInt(document.querySelector('#input1').value);
    
     if(input === randomNumber2){
         para.textContent=`${randomNumber2} You Guessed It Right`;
         numSection.style.filter="none"
         document.querySelector("#btn1").disabled = true;
         document.querySelector("#btn1").style.backgroundColor ="rgba(0, 0, 0, 0.089)"
         document.querySelector("#btn1").style.textDecoration ="line-through"
         document.querySelector("#btn1").style.color="black"
     }

     else if(input > randomNumber2 ){
        para.textContent= `${input} Your Number Is Higher Try To Guess Lower Number`
     }
     else if(input < randomNumber2){
         para.textContent = `${input} Your Number Is Lower Try To Guess Higher Number`

     }
    
     if(chances === 0){
         para.textContent = `Sorry, you've run out of chances. The correct number was ${randomNumber2}.`;
         numSection.style.filter = "none"
         para2.textContent = "Believe in yourself!"
         document.querySelector("#btn1").disabled=true;
     }
chances--;



    const randomNumber = Math.floor(Math.random() * motivatingLines.length);
    para2.textContent=`"${motivatingLines[randomNumber]}"`;
})

var btn2 = document.querySelector("#btn2").addEventListener("click",() =>{
    window.location.reload();
})