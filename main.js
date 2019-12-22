var sayings = document.querySelector('.sayings');
var confuciusSaying = document.querySelector('.confucius');
var cookieSaying = document.querySelector('.fortune-cookie');
var nostradamusSaying = document.querySelector('.nostradamus');
var magicSaying = document.querySelector('.magic')

// sayings.addEventListener('click', toggleMessage);
confuciusSaying.addEventListener('click', toggleMessage);
cookieSaying.addEventListener('click', toggleMessage);
nostradamusSaying.addEventListener('click', toggleMessage);
magicSaying.addEventListener('click', toggleMessage);


// function retrieveFortune() {
//   var clickBar = document.querySelectorAll('.bar');
//   for (let i=0; i.bar.length; i++) {
//     bar[i].addEventListener('click', click);
//   }
// }
//
// function click() {
//   document.querySelector('.active.sayings').classList.remove('.active');
//   this.classList.add('.active');
// }

function toggleMessage () {
  var messageId = event.target.getAttribute('data-id');
  var cssSelector = `.sayings > p.${messageId}`;

  var messageToHide = document.querySelector('.sayings p.active');
  if(messageToHide){
    messageToHide.classList.remove('active');
  }

  var messageToShow = document.querySelector(cssSelector);
  messageToShow.classList.add('active');
}
