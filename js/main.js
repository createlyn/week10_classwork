var form = document.getElementById('form');
var nameInput = document.getElementById('name');
var phoneInput = document.getElementById('phone');
var emailInput = document.getElementById('email');
var methodInput = document.getElementById('method');
var messageInput = document.getElementById('message');
var submit = document.getElementById('submit');
var reset = document.getElementById('reset');


(function() {
  var submitted = false;

  submit.disabled = true;
  submit.className = 'button--disabled';

  console.log(nameInput);

  // if (nameInput.length == 0 ) {
  //   submit.disabled = "false";
  //      }

})();
