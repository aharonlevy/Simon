

const buttonsColor = ["red" , "blue" , "green" , "yellow" ];

let gamePattern = [];
let userPattern = [];
$(".btn").click(function (event) {
    let usercolor = this.id;
    playsound(usercolor);
    $(('#'+ usercolor)).fadeOut(100).fadeIn(100);
    userPattern.push(usercolor); 
    console.log(userPattern);       
})

function nextSequence() {
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







