//Aos
AOS.init();
//Google Sheet connect code
var scriptURL = "https://script.google.com/macros/s/AKfycbxuZ0uN3Xo-DShiBW2B4M5lvT6I1Ae9LLJyxxjb-3RiRm5fIuv3a8RU8g15JQSTT9aVLQ/exec";
var form = document.forms['google-sheet'];
form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
  .catch(error => console.error('Error!', error.message))
});

//scroll to top
$("#top-button").click(
    function(){
        $("html,body").animate({scrollTop: 0}, 1000);
    }
);    