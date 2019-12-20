var sayings = document.querySelector('.sayings');

sayings.addEventListener('click', toggleMessage);

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
  var message = document.querySelector(`.${messageId}`);
  message.style.display = message.style.display === 'none' ? '' : 'block';
}
