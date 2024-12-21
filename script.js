const audioElem = document.querySelectorAll('audio');

var currentButton;

audioElem.forEach((audio, index) => {
    //console.log("audio found :" + index)
    audio.addEventListener('ended', () => {
        currentButton.classList.remove('active');
        //console.log("audio terminé :" + index)
    });
})

function play(e, button) {
    var audio = document.getElementById('audio'+e);
    //console.log(button);
    const activeButtons = document.querySelectorAll('button.active');
    activeButtons.forEach((actButton) => {
        actButton.classList.remove('active')
    })

    var sounds = document.getElementsByTagName('audio');
    var shouldPlay = true;
    for(i=0; i<sounds.length; i++) {
        if(sounds[i].currentTime > 0 && !sounds[i].paused && !sounds[i].ended) {
            sounds[i].pause();
            sounds[i].currentTime = 0;
            button.classList.remove('active')

            if(audio == sounds[i]) shouldPlay = false;
        }
    }


    if(shouldPlay) {
        button.classList.add('active')
        currentButton = button;
        audio.play();
    }
}