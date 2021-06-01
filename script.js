function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Læs mere";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Læs mindre";
      moreText.style.display = "inline";
    }
  }

  window:addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

function navigation() {
    if (mobilenavigation.style.display ==="none") {
        mobilenavigation.style.display = "block" 
    } else { (mobilenavigation.style.display ="none")
    }
}