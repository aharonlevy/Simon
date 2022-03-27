

const buttonsColor = ["red" , "blue" , "green" , "yellow" ];

let gamePattern = [];
let userPattern = [];
$(".btn").click(function (event) {
    let usercolor = this.id;
    colorAudio = new Audio("src/" + usercolor + ".ogg")
    colorAudio.play();
    userPattern.push(usercolor); 
    console.log(userPattern);       
})

function nextSequence() {
    let rendumNumber = Math.floor(Math.random() * 4);
    let randomChoosenColor = buttonsColor[rendumNumber];
    gamePattern.push(randomChoosenColor);

    let selectedColor = gamePattern[(gamePattern.length)-1];
    colorAudio = new Audio("src/"+ selectedColor+".ogg");
    colorAudio.play()
    $(('#'+ selectedColor)).fadeOut(100).fadeIn(100);
}
