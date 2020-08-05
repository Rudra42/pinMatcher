
const initialState = document.getElementById('wrong-entry');
const initialState2 = document.getElementById('correct-entry');
initialState.style.display = initialState2.style.display = 'none';


//pinGenerator function starts
function pinGenerator(){
    let result = Math.random() * (9999 - 1000) + 1000;
    let pin = Math.round(result);
    return pin;
}

// pinDisplayer function starts
function pinDisplayer(){
    const pinDisplay = document.getElementById('pin-display');
    pinDisplay.value = pinGenerator();
}


//digitDisplay function starts
function digitDisplay(num){
    const digitDisplay = document.getElementById('digit-display');
    digitDisplay.value+=num;
}
digitDisplay.value='';


//backSpace function starts
function backSpace(){
    var screen = document.getElementById('digit-display').value;
    var erase = screen.slice(0, screen.length - 1);
    document.getElementById('digit-display').value = erase;
}

//cleanDisplay function starts
function cleanDisplay(){
    document.getElementById('digit-display').value = '';
}


//submit button
const submitButton = document.getElementById('submit-pin');
let tryExists = document.getElementById('try-left').innerText;
let tryLeft = parseInt(tryExists);
submitButton.addEventListener('click',function(){

    const pinDisplay = document.getElementById('pin-display');
    const digitDisplay = document.getElementById('digit-display');
    
    const wrongState = document.getElementById('wrong-entry');
    const correctState = document.getElementById('correct-entry');
    const actionLeftText = document.getElementById('action-left-text');
    

     if(pinDisplay.value===digitDisplay.value){
         correctState.style.display='block';
         wrongState.style.display='none';
         actionLeftText.style.display='none';
         submitButton.disabled= true;
        }
    else{
        correctState.style.display='none';
        wrongState.style.display='block';
        tryLeft=tryLeft-1;
        actionLeftText.innerText = tryLeft +' try left'   
            if(tryLeft<=0){
                submitButton.disabled= true;
            }
        }
    

})






