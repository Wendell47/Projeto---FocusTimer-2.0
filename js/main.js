import themeButtonsEvents from "./themeButtons.js"
import Timer from "./timer.js"

const cardsSongAmbientTheme = document.querySelector('.cardsSongAmbientTheme')

const themeButtons = {

    florestThemeButton: cardsSongAmbientTheme.querySelector('#florestThemeSong'),
    rainThemeButton: cardsSongAmbientTheme.querySelector('#rainThemeSong'),
    coffeeThemeButton: cardsSongAmbientTheme.querySelector('#coffeeThemeSong'),
    fireThemeButton: cardsSongAmbientTheme.querySelector('#fireThemeSong'),

}

const controlsButton = {
    ButtonPlay: document.querySelector('.play'),
    ButtonPause : document.querySelector('.pause'),
    ButtonStop : document.querySelector('.stop'),
    ButtonVolumeUp : document.querySelector('.volumeUp'),
    ButtonVolumeDown : document.querySelector('.volumeDown'),
 }
 

const themeButtonsActions = themeButtonsEvents({
    themeButtons
})

themeButtons.florestThemeButton.onclick = themeButtonsActions.selectedflorestTheme
themeButtons.rainThemeButton.onclick = themeButtonsActions.selectedRainTheme
themeButtons.coffeeThemeButton.onclick = themeButtonsActions.selectedCoffeeTheme
themeButtons.fireThemeButton.onclick = themeButtonsActions.selectedFireTheme


const timerEvents = Timer (
    {
        controlsButton  
    }
)

const BtnActionPlay = function ButtonPlay(){

    timerEvents.play ()
    
}

const BtnActionPause = function(){

    timerEvents.pause()
}

const BtnActionStop = function(){

    timerEvents.stop ()
}

const BtnAddMinutes = function(){
    timerEvents.add()
}
const BtnRemoveMinutes = function(){
    timerEvents.remove()
}

controlsButton.ButtonPlay.onclick = BtnActionPlay

controlsButton.ButtonPause.onclick = BtnActionPause

controlsButton.ButtonStop.onclick = BtnActionStop

controlsButton.ButtonVolumeUp.onclick = BtnAddMinutes

controlsButton.ButtonVolumeDown.onclick = BtnRemoveMinutes




