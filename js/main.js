var swiper = new Swiper('.swiper-container', {
      slidesPerView: 6,
      spaceBetween: 10,
      slidesPerGroup: 2,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

var myModalEl = document.getElementById("exampleModalToggle2");
myModalEl.addEventListener("shown.bs.modal", function (event) {

    var button = event.relatedTarget
  // Extract info from data-bs-* attributes
  var video = button.getAttribute('data-bs-video')
//collection: "u2YTi2LJaxZcYA",
    new Twitch.Player("twitch-embed", {
    
    video: video,
    });
});
myModalEl.addEventListener("hidden.bs.modal", function (event) {
    document.getElementById("twitch-embed").innerHTML = ''
});


function ready(callbackFunc) {
  if (document.readyState !== 'loading') {
    // Document is already ready, call the callback directly
    callbackFunc();
  } else if (document.addEventListener) {
    // All modern browsers to register DOMContentLoaded
    document.addEventListener('DOMContentLoaded', callbackFunc);
  } else {
    // Old IE browsers
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState === 'complete') {
        callbackFunc();
      }
    });
  }
}



var youtube = document.querySelectorAll( ".youtube" );
// loop
for (var i = 0; i < youtube.length; i++) {

    // thumbnail image source.
  var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg"; 

  // Load the image asynchronously
  var image = new Image();
  image.src = source;
  image.addEventListener( "load", function() {
    youtube[ i ].appendChild( image );
  }( i ) );

  youtube[i].addEventListener( "click", function() { 
    
    var iframe = document.createElement( "iframe" );

    var div = document.createElement( "div" );
    // div.classList.add("ratio");
    // div.classList.add("ratio-16x9");

      iframe.setAttribute( "frameborder", "0" );
      iframe.setAttribute( "allowfullscreen", "" );
      iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );

      div.appendChild( iframe );

      this.innerHTML = "";
      this.appendChild( div );
  } );

}


new WOW().init(); 
