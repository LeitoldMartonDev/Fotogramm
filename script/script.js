/* SCRIPT:JS – FOTOGRAMM */

let images = [
  "./img/adrian-botica-yWRF7AZIriQ-unsplash.jpg",
  "./img/boglarka-caup-j6g6pVlifn8-unsplash.jpg",
  "./img/dmytro-dovgan-8T_iPvpcfdc-unsplash.jpg",
  "./img/george-bakos-kr81vXbHLX0-unsplash.jpg",
  "./img/gramantik-peter-7VSOkHMQ1vg-unsplash.jpg",
  "./img/gramantik-peter-d43p1K3edXU-unsplash.jpg",
  "./img/marian-baciu-Nqb0j5KiCd8-unsplash.jpg",
  "./img/michal-kmet-KnwELFyQob0-unsplash.jpg",
  "./img/nikolett-emmert-OCYqyGeRX-E-unsplash.jpg",
  "./img/oleksii-piekhov-AyuU9hmB9Rg-unsplash.jpg",
  "./img/regos-kornyei-PItqz2WV3k8-unsplash.jpg",
  "./img/urban-vintage-u98xcJdeis4-unsplash.jpg",
];

function render() {
  let contentRef = document.getElementById("content");
  for (let index = 0; index < images.length; index++) {
    contentRef.innerHTML += getNoteTemplate(index);
  }
}
function getNoteTemplate(i) {
  return `
    <div  class='imageholder'>
        <img onclick="toggleOverlay(${i})" tabindex="0" id="images" class='body_photo' src="${images[i]}" alt="image: ${i}, ${images[i]} ">
    </div> 
    <div id="overlay"></div>`;
}
function toggleOverlay(i) {
  currentIndex = i;
  let overlayRef = document.getElementById("overlay");
  overlayRef.innerHTML = "";
  overlayRef.classList.toggle("overlay");
  document.getElementById("overlay").innerHTML += `
    <div onclick="escIng()" class="wholeframe" >  
        <div>   
            <button onclick="escIng()" id="btnEsc" class="btnEsc" alt="Escape button, brings back to main page">Escape</button>
        </div> 
        <div id="pictureFrame" class="pictureFrame">
            <img onclick="rightClick(${i})" id="imgzoom" class="imgzoom" src="${images[i]}" alt="big image:${i}, ${images[i]}">
        </div>
        <div class="underbuttondiv">
           <button onclick="leftClick(${i})" id="btnPrevious" class="btnPrevious" alt="Button to go to the previous picture">Previous</button>
           <button onclick="rightClick(${i})" id="btnNext" class="btnNext" alt="Button to go to the next picture" >Next</button>
        </div>
    </div>`;

  tabIndexBackgroundOFF();
}

function tabIndexBackgroundOFF() {
  let tabIndexList = document.getElementsByClassName("body_photo");

  for (let index = 0; index < tabIndexList.length; index++) {
    const singleRef = tabIndexList[index];
    singleRef.tabIndex = -1;
  }
}

function tabindexBackgroundOn() {
  let tabIndexList = document.getElementsByClassName("body_photo");

  for (let index = 0; index < tabIndexList.length; index++) {
    const singleRef = tabIndexList[index];
    singleRef.tabIndex = 0;
  }
}

function escIng() {
  const element = document.getElementById("overlay");
  element.innerHTML = "";
  element.classList.remove("overlay");

  tabindexBackgroundOn();
}
function rightClick() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("imgzoom").src = images[currentIndex];
  event.stopPropagation();
}
function leftClick() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("imgzoom").src = images[currentIndex];
  event.stopPropagation();
}
