const heroVid = document.querySelector(".hero-vid");
setTimeout(() => {heroVid.classList.toggle('fade')}, 7000);
const titleContainer = document.querySelector('.title-container');
setTimeout(()=> {titleContainer.classList.toggle('on')}, 8000);


// video is loaded on page render
// toggling video view 
function playVideo() {
    const playBtn = document.querySelector('.play-button-on');
    playBtn.className = "play-button-toggle";

    const sectionOverlay = document.querySelector('.section-overlay');
    sectionOverlay.className = "section-overlay-toggle";

    const video = document.querySelector('.feature-video');
    setTimeout(() => {video.classList.toggle('show')}, 250)
}

// toggling the product gallery
function toggleProductGallery() {
    const gallery = document.querySelector('.product-gallery-container');
    const rows = document.querySelectorAll('.gallery-row');
    rows.forEach(row => {
        row.classList.toggle('show');
    })
    gallery.classList.toggle('show');
}


// intersection observer options
const sections = document.querySelectorAll('.slide-flow');
// options must be set (even if empty) to compile
const options = {
    root: null,
    threshold: .4,
    rootMargin: "0px 0px 0px 0px"
};

// intersection observers
const title = document.getElementById('title');
const playButton = document.getElementById('play-btn');
const observer = new IntersectionObserver(function(sections, observer) {
    sections.forEach(entry => {
        // toggle appearance of title
        if(entry.isIntersecting && entry.target.id==('section-hero')) {
            title.className = 'title';
        } else if(entry.target.id==('section-hero') && !entry.isIntersecting){
            title.className = 'title-off';
        }

        // toggle the appearance of play button in section two
        if(entry.isIntersecting && entry.target.id==('section-video')) {
            playButton.className = 'play-button-on';
        } else if(entry.target.id==('section-video') && !entry.isIntersecting){
            playButton.className = 'play-button-off';
        }
    });
}, options);
// observe elements
sections.forEach(section => {
    observer.observe(section);
});


// SWIPER OBJECTS AND PARAMETERS
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    speed: 500,
    mousewheel: {
        releaseOnEdges: true
    },
    direction: 'vertical',
    spaceBetween: 50,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });
  var swiper2 = new Swiper(".mySwiper2", {
    nested: true,
    loop: true,
    direction: "horizontal",
    speed: 1500,
    autoplay: {
        delay: 5000
    },
    spaceBetween: 50
  });

  