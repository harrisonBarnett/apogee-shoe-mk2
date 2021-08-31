const heroVid = document.querySelector(".hero-vid");
setTimeout(() => {heroVid.classList.toggle('fade')}, 7000);

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
        if(entry.isIntersecting && entry.target.id==('section-1')) {
            title.className = 'title';
        } else if(entry.target.id==('section-1') && !entry.isIntersecting){
            title.className = 'title-off';
        }

        // toggle the appearance of play button in section two
        if(entry.isIntersecting && entry.target.id==('section-3')) {
            playButton.className = 'play-button-on';
        } else if(entry.target.id==('section-3') && !entry.isIntersecting){
            playButton.className = 'play-button-off';
        }
    });
}, options);
// observe elements
sections.forEach(section => {
    observer.observe(section);
});