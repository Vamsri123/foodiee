

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// const scriptURL = 'https://script.google.com/macros/s/AKfycbzdK1y6vq27YgJBCLjRZDDV2QvgIYrw62e-ehfLAwilgFdNIM2Ge8JlZez8J_uVcECt/exec'

const form = document.forms['booktable']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your Table  is conformed!." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
