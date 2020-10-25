const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar_links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

/*function moveRight() {
  var elem = document.getElementById("squirrel");
  var elem2= document.getElementById("acorn");
  var pos = 10;
  var pos2 = -15;
  var id = setInterval(frame, 1);
  function frame() {
    if (pos == 890) {
      clearInterval(id);
    } else {
      pos+=2;
      pos2+=2; 
      elem2.style.left = pos2 + "px"; 
      elem.style.left = pos + "px"; 
    }
  }
}*/
