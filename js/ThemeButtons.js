
const florestSong = new Audio("assets/songs/Floresta.wav")
const rainSong = new Audio("assets/songs/Chuva.wav")
const coffeeSong = new Audio("assets/songs/Cafeteria.wav")
const fireSong = new Audio("assets/songs/Lareira.wav")

export default function buttonThemeSelect ({
    themeButtons
}){

    function selectedflorestTheme (){

        themeButtons.florestThemeButton.classList.add('selectCardTheme')
        themeButtons.coffeeThemeButton.classList.remove('selectCardTheme')
        themeButtons.fireThemeButton.classList.remove('selectCardTheme')
        themeButtons.rainThemeButton.classList.remove('selectCardTheme')

        florestSongTheme ()
    }
    
    function selectedCoffeeTheme (){
        themeButtons.florestThemeButton.classList.remove('selectCardTheme')
        themeButtons.coffeeThemeButton.classList.add('selectCardTheme')
        themeButtons.fireThemeButton.classList.remove('selectCardTheme')
        themeButtons.rainThemeButton.classList.remove('selectCardTheme')

        coffeeSongTheme ()
    }
    
    function selectedFireTheme (){
        themeButtons.florestThemeButton.classList.remove('selectCardTheme')
        themeButtons.coffeeThemeButton.classList.remove('selectCardTheme')
        themeButtons.fireThemeButton.classList.add('selectCardTheme')
        themeButtons.rainThemeButton.classList.remove('selectCardTheme')

        fireSongTheme ()
    }
    
    function selectedRainTheme (){
    
        themeButtons.florestThemeButton.classList.remove('selectCardTheme')
        themeButtons.coffeeThemeButton.classList.remove('selectCardTheme')
        themeButtons.fireThemeButton.classList.remove('selectCardTheme')
        themeButtons.rainThemeButton.classList.add('selectCardTheme')

        rainSongTheme ()
    }
    return{
        selectedCoffeeTheme,
        selectedFireTheme,
        selectedRainTheme,
        selectedflorestTheme
    }
}

let soundsOff = (soundOne, soundTwo, soundThree) => {
    soundOne.pause()
    soundTwo.pause()
    soundThree.pause()
  }

function florestSongTheme(){
 soundsOff (coffeeSong,fireSong,rainSong)
 florestSong.play()
 florestSong.loop = true

}

function rainSongTheme(){
 soundsOff(florestSong, fireSong, coffeeSong)
 rainSong.play()
 florestSong.loop = true

}

function coffeeSongTheme(){
 soundsOff(rainSong,florestSong,fireSong)
 coffeeSong.play()
 florestSong.loop = true

}

function fireSongTheme(){
 soundsOff(rainSong,florestSong,coffeeSong)
 fireSong.play()
 florestSong.loop = true

}

