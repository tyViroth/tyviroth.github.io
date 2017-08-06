$(document).ready(function(){
      $('.carousel').carousel();
    });
       


  // Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();
        

 $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );
        
$('.carousel.carousel-slider').carousel({fullWidth: true});

function up(){
  alert("hello");
  console.log("horizontal");
}

  $(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });
        
// tap target
  $('.tap-target').tapTarget('open');
  $('.tap-target').tapTarget('close');
     


  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });
    $('#modal1').modal('open');
      $('#modal1').modal('close');

        $('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '4%', // Starting top style attribute
      endingTop: '10%', // Ending top style attribute
      ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
        alert("Ready");
        console.log(modal, trigger);
      },
      complete: function() { alert('Closed'); } // Callback for Modal close
    }
  );
      
// change color background


var wrapper = document.querySelector('.wrapper');
var button = document.querySelector('.button');
var ripple = document.querySelector('.ripple');

button.addEventListener('click', function (e) {
  var top = button.offsetTop + e.offsetY;
  var left = button.offsetLeft + e.offsetX;

  Object.assign(ripple.style, {
    top: top + 'px',
    left: left + 'px'
  });

  wrapper.classList.toggle('dark');
});