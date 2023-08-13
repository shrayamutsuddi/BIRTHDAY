const btn_el = document.getElementById('btn');
const playBtn_el = document.getElementById('playBtn');
let image = document.querySelector('#bulbImg');
const decorateBtn_el = document.getElementById('decorateBtn');
const button_el = document.getElementById('cake');
function run() {
    changeBGColor('#FFD9B7');
    image.style.opacity = 0;
    playBtn_el.style.display = 'block';
}
function changeBGColor(color) {
    document.body.style.background = color;

}

//this code plays music. RUNS FINE.
function playMusic() {
    var song = document.getElementById('music');
    song.play();
    decorateBtn_el.style.display = 'block';
}

/*flying banner*/
const bannerImage_el = document.getElementById('bannerImage');
decorateBtn_el.addEventListener("click", function () {
    bannerImage_el.style.display = 'block';
    bannerImage_el.classList.add('flying');
    setTimeout(() => {
        bannerImage_el.classList.remove('flying');
        bannerImage_el.classList.add('fixed');
    }, 5000);
    button_el.style.display = 'block';
    setTimeout(() => {
        console.log("hi");
        button_el.disabled = false;
    }, 3000);
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
/*Birthday Cake*/
const mycake_el = document.getElementById("cakeSVG");
button_el.addEventListener("click", function () {
    const contentDiv = document.getElementById("contentDiv");

    fetch("temp.html")
        .then(response => response.text())
        .then(htmlContent => {
            contentDiv.innerHTML = htmlContent;
        })
        .catch(error => {
            console.error("Error loading content:", error);
        });
})
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
