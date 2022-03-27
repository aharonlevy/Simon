

const buttonsColor = ["red" , "blue" , "green" , "yellow" ];

let gamePattern = [];
let userPattern = [];
let isRunning = false;
let firstuse = false;
let level = 0;
$(".btn").click(function (event) {
    let usercolor = this.id;
    playsound(usercolor);
    $(('#'+ usercolor)).fadeOut(100).fadeIn(100);
    userPattern.push(usercolor); 
    console.log(userPattern);       
})

$(document).keydown(function (event) {
    
   if (firstuse == false) {
        if (this.key == "a"){
            isRunning = true;
            firstuse = true;
            nextSequence();
        }
   } else if (isRunning == false)
        isRunning = true;
        level = 0;
        nextSequence();
});

function nextSequence() {
    level++;
    $("h1").text("Level " + level);
    let rendumNumber = Math.floor(Math.random() * 4);
    let randomChoosenColor = buttonsColor[rendumNumber];
    gamePattern.push(randomChoosenColor);

    let selectedColor = gamePattern[(gamePattern.length)-1];
    playsound(selectedColor);
    $(('#'+ selectedColor)).fadeOut(100).fadeIn(100);
}

function playsound(sound) {
    choosensound = new Audio("src/" + sound + ".ogg")
    choosensound.play()    
}








