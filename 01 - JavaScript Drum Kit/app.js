function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    //If no key associated with the audio
    if (!audio) {
        alert(`"${e.key}" is not associated with any audio, Please press another key`);
        return ;
    }
    audio.currentTime = 0; //rewind the audio to the start so that it could be played again
    audio.play();
    key.classList.add("playing"); //same as $(".key").addClass("playing") in jquery
}

function removeTransition(e) {
    if (e.propertyName !== "transform") return; // skip it if it is not transform property
    this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
//add eventlistener for transition end on each div array element
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);