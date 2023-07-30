let drums = document.querySelectorAll(".drum");

for (i=0; i<7; i++){
    drums[i].addEventListener('click', function (){
        buttonPressed = this.innerHTML;
        makeSound(buttonPressed.toLowerCase());
        buttonAnimation(buttonPressed.toLowerCase());
    });
}

document.addEventListener('keypress', function(event){
    makeSound(event.key);  
    buttonAnimation(event.key);
});


function makeSound(keyPressed){
    switch (keyPressed){
        case "w":
            var tom1 = new Audio('./sounds-20230609T104626Z-001/sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('./sounds-20230609T104626Z-001/sounds/tom-2.mp3');
            tom2.play();
            break; 
        case "s":
            var tom3 = new Audio('./sounds-20230609T104626Z-001/sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('./sounds-20230609T104626Z-001/sounds/tom-4.mp3');
            tom4.play();
            break; 
        case "j":
            var snare = new Audio('./sounds-20230609T104626Z-001/sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            var kick = new Audio('./sounds-20230609T104626Z-001/sounds/kick-bass.mp3');
            kick.play();
            break;  
        case "l":
            var crash = new Audio('./sounds-20230609T104626Z-001/sounds/crash.mp3');
            crash.play();
            break;         
    }
}

function buttonAnimation(btn){
    var activeButton = document.querySelector("."+btn);
    activeButton.classList.add('pressed');

    setTimeout(() => {
        activeButton.classList.remove('pressed');
    }, 100);
}