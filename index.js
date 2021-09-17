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

// SHOPIFY COLLECTION ELEMENT
(function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
    } else {
        loadScript();
    }
    } else {
    loadScript();
    }
    function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
    }
    function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
        domain: 'apogeeteststore.myshopify.com',
        storefrontAccessToken: '1bca1a2be14e8c39f087bb07a65052f6',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent('collection', {
        id: '278764257460',
        node: document.getElementById('collection-component-1631817584556'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
    "product": {
    "styles": {
        "product": {
        "@media (min-width: 601px)": {
            "max-width": "calc(25% - 20px)",
            "margin-left": "20px",
            "margin-bottom": "50px",
            "width": "calc(25% - 20px)"
        },
        "img": {
            "height": "calc(100% - 15px)",
            "position": "absolute",
            "left": "0",
            "right": "0",
            "top": "0"
        },
        "imgWrapper": {
            "padding-top": "calc(75% + 15px)",
            "position": "relative",
            "height": "0"
        }
        }
    },
    "text": {
        "button": "Add to cart"
    }
    },
    "productSet": {
    "styles": {
        "products": {
        "@media (min-width: 601px)": {
            "margin-left": "-20px"
        }
        }
    }
    },
    "modalProduct": {
    "contents": {
        "img": false,
        "imgWithCarousel": true,
        "button": false,
        "buttonWithQuantity": true
    },
    "styles": {
        "product": {
        "@media (min-width: 601px)": {
            "max-width": "100%",
            "margin-left": "0px",
            "margin-bottom": "0px"
        }
        }
    },
    "text": {
        "button": "Add to cart"
    }
    },
    "option": {},
    "cart": {
    "text": {
        "total": "Subtotal",
        "button": "Checkout"
    }
    },
    "toggle": {}
},
        });
    });
    }
})();
// SWIPER OBJECTS AND PARAMETERS
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    mousewheel: {
        thresholdDelta: 40,
        releaseOnEdges: true
    },
    direction: 'vertical',
    spaceBetween: 50,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  var swiper2 = new Swiper(".mySwiper2", {
    nested: true,
    parallax: true,
    direction: "vertical",
    mousewheel: {
        thresholdDelta: 40,
        releaseOnEdges: true
    },
    spaceBetween: 50,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
  });

