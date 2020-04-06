var click = document.querySelectorAll('.btn-modal-call');
var readyForm = document.querySelectorAll('.btn-ready-form');
var callback = document.querySelector('.callback-form-block');
var modal = document.querySelector('.callback-form');
var readyModal = document.querySelector('.ready-form');
var callbackLink = document.querySelector('.callback');
var input = document.querySelectorAll('.number-input');

callbackLink.addEventListener('click', openFeedbackModal);

for(let i=0; i < click.length; i++){
    click[i].addEventListener('click', openFeedbackModal);
};
for(let i=0; i<readyForm.length; i++){
    readyForm[i].addEventListener('click', openFeedbackModalReady);
};
function openFeedbackModalReady (event){
    for(let i=0; i<input.length; i++){
        input[i].value = "";
    };
    callback.style.display = 'block';
    readyModal.style.display = 'block'
    var scrollPosition = event.view.scrollY + 200;
    readyModal.style.top = `${scrollPosition}px`;
    document.body.style.overflow = 'hidden';
};
function openFeedbackModal (event){
    for(let i=0; i<input.length; i++){
        input[i].value = "";
    };
    callback.style.display = 'block';
    modal.style.display = 'block';
    scrollPosition = event.view.scrollY + 200;
    modal.style.top = `${scrollPosition}px`;
    document.body.style.overflow = 'hidden';
};


let close = document.querySelector('.close');
close.onclick = function (){
    callback.style.display = 'none';
    modal.style.display = 'none';
    readyModal.style.display = 'none'
    document.body.style.overflow = 'visible';
};
let closeReady = document.querySelector('.ready');
closeReady.onclick = function (){
    callback.style.display = 'none';
    modal.style.display = 'none';
    readyModal.style.display = 'none'
    document.body.style.overflow = 'visible';
};