const timer = document.querySelector('#timer')

const minutesDisplay = timer.querySelector('.minutes')
const secondsDisplay = timer.querySelector('.seconds')

let minutes = Number(minutesDisplay.textContent)


export default function Timer(
{
    controlsButton
}
)
{
    let timerTimerOut

    function updateTimerDisplay (minutes, seconds){

        minutesDisplay.textContent = String(minutes). padStart(2,"0")
        secondsDisplay.textContent = String(seconds). padStart(2,"0")
    }
 
    

    function setTimeOut(){
        
        let minutes = Number(minutesDisplay.textContent)
        let seconds = Number(secondsDisplay.textContent)

            updateTimerDisplay(minutes, 0)
        
            if (minutes <= 0 && seconds <=0){
                
                pause ()
                return   
            }
        
            else if(seconds <=0){
                seconds = 60
                

                --minutes
            }
        
            updateTimerDisplay(minutes, String (seconds - 1))
        
            timerTimerOut = setTimeout(setTimeOut,1000)
            
        }
        
        function pause() {
        
            clearTimeout(timerTimerOut)
            resetControls()
           
        }
        
        function play(){
            resetControls()
            setTimeOut ()
        }
        
        function stop(){

            const isButtonPauseHidden = controlsButton.ButtonPause.querySelector('hide') === null
            if(isButtonPauseHidden){
                resetControls()
            }

            updateTimerDisplay(minutes, 0)
            clearTimeout(timerTimerOut)
            console.log(isButtonPauseHidden)
            console.log(controlsButton.ButtonPause.querySelector('hide'))
        }

        function add (){
            
        let minutes = Number(minutesDisplay.textContent)
        
        let seconds = Number(secondsDisplay.textContent)
        
            updateTimerDisplay(String (minutes + 5),seconds )

        }
        
        function remove (){
            
        let minutes = Number(minutesDisplay.textContent)

        let seconds = Number(secondsDisplay.textContent)
        
       
      
            
            if (minutes <= 0){

                updateTimerDisplay(String (0), seconds)
    
            }

            else if (minutes >= 0){
                updateTimerDisplay(String (minutes - 5),seconds )
            }
        }
        
        

         function resetControls()
        {

            controlsButton.ButtonPlay.classList.toggle('hide')
            controlsButton.ButtonPause.classList.toggle('hide')
            
        }

        return{
            setTimeOut,
            updateTimerDisplay,
            play,
            pause,
            stop,
            add,
            remove,
        }

        
}
