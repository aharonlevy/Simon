

const buttonsColor = ["red" , "blue" , "green" , "yellow" ];

let gamePattern = [];
let userPattern = [];
let isRunning = false;
let level = 0;
$(".btn").click(function (event) {

    let usercolor = this.id;
    playsound(usercolor);
    $(('#'+ usercolor)).fadeOut(100).fadeIn(100);
    userPattern.push(usercolor); 
    console.log("user =" + userPattern + "       game =" + gamePattern);
    checkPattern((userPattern.length)-1); 
})

$(document).keydown(function (event) {
    if (isRunning == false){
        isRunning = true;
        nextSequence();
    }
  
});

function nextSequence() {
    console.log("nextStartet");
    level++;
    $("h1").text("Level " + level);
    let rendumNumber = Math.floor(Math.random() * 4);
    let randomChoosenColor = buttonsColor[rendumNumber];
    gamePattern.push(randomChoosenColor);

    playsound(randomChoosenColor);
    $(('#'+ randomChoosenColor)).fadeOut(100).fadeIn(100);

}

function playsound(sound) {
    choosensound = new Audio("src/" + sound + ".ogg")
    choosensound.play()    
}

function checkPattern(arryLocation) {
    if (!(userPattern[arryLocation] === gamePattern[arryLocation])){
        $("h1").text("Game over!");
        isRunning = false;
        gamePattern.splice(0,(gamePattern.length));
        userPattern.splice(0,(userPattern.length));
        level = 0;
        console.log("game over");
        return;
    }

    if (gamePattern.length == userPattern.length){
        userPattern.splice(0,(userPattern.length));
        nextSequence();
    }
}







