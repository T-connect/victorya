function playVid(){
    var vid = document.getElementById("vid");
    var bg = document.getElementById("vid-bg");
if(vid.paused){
    vid.play();
    bg.style.opacity = 0
}
}

function load(){
   nav = document.getElementById("navbarNavDropdown");
   nav.classList.toggle("show")
}