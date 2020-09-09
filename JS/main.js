const glass = document.querySelector('.glass');
const callBackButton = document.querySelector(".link-call");
const closeBtn = glass.querySelector('.close');

callBackButton.addEventListener('click', e => {
    glass.hidden = false;
});

closeBtn.addEventListener('click', e => {
    glass.hidden = true;
});

glass.addEventListener('click', e => {
    if(e.target == glass){
        glass.hidden = true;  
    }
});