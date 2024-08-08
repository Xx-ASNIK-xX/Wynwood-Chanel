let navicon = document.querySelector('.navicon');
let navigation = document.querySelector('.navigation');

function drawCloseIcon(){
    if(navicon.classList.contains('open')){
        navicon.classList.replace('open','close');
        navigation.classList.replace('open','close');
    }
    else{
        navicon.classList.replace('close','open');
        navigation.classList.replace('close','open');
    
    }
}

function resetClassOpen(){
    navicon.classList.replace('close','open');
    navigation.classList.replace('close','open');
}

window.onresize= resetClassOpen;

navicon.onclick = drawCloseIcon;