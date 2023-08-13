const btn_el = document.getElementById('btn');
const playBtn_el = document.getElementById('playBtn');
let image = document.querySelector('#bulbImg');
const decorateBtn_el = document.getElementById('decorateBtn');
function run(){
    changeBGColor('#FFD9B7');
    image.remove();
    playBtn_el.style.display = 'block';
}
function changeBGColor(color){
    document.body.style.background = color;
    
}

//this code plays music. RUNS FINE.
function playMusic(){
    var song = document.getElementById('music');
    song.play();
    decorateBtn_el.style.display = 'block';
}

/*flying banner*/
const bannerImage_el = document.getElementById('bannerImage');
decorateBtn_el.addEventListener("click",function(){
    bannerImage_el.style.display = 'block';
    bannerImage_el.classList.add('flying');
    setTimeout(() => {
        bannerImage_el.classList.remove('flying');
        bannerImage_el.classList.add('fixed');
    }, 5000);
})
/*function animateBanner(){
    bannerImage_el.style.display = 'block';
    bannerImage_el.classList.add('flying');
    setTimeout(() => {
        bannerImage_el.classList.remove('flying');
        bannerImage_el.classList.add('fixed');
    }, 5000);
}
*/
/*make the bulb glow pink */
/*const bulbElement = document.querySelector('.bulb');
function startGlowAnimation(){
    bulbElement.classList.add('bulb_glow_pink');
}
const startButton = document.getElementById('startButton');
startButton.addEventListener('click', startGlowAnimation);*/

/*btn_el.onclick = function(){
    image.classList.toggle('img2');
  }
btn_el.addEventListener('click', function() {
    // Toggle the bulb's visibility by toggling the "img2" class
    bulb.classList.toggle('img2');
  });*/
