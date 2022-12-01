const imagesToLoad = document.querySelectorAll('img[data-src]');

const options2 = {
    // root: document.querySelector('main'),
    threshold: 1.0,
    rootMargin: '0px 0px 0px 0px'
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    }, options2);

    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
};
// //////////////////////////////////////////////////////////////////////////

// Muting below for the sake of page weight.
// const imagesToLoad3 = document.querySelectorAll('source[data-srcset]');

// const options3 = {
//     // root: document.querySelector('main'),
//     threshold: 1.0,
//     rootMargin: '0px 0px 0px 0px'
// };

// const loadImages3 = (image) => {
//     image.setAttribute('srcset', image.getAttribute('data-srcset'));
//     image.onload = () => {
//         image.removeAttribute('data-srcset');
//     };
// };

// if ('IntersectionObserver' in window) {
//     const observer = new IntersectionObserver((items, observer) => {
//         items.forEach((item) => {
//             if (item.isIntersecting) {
//                 loadImages3(item.target);
//                 observer.unobserve(item.target);
//             }
//         });
//     }, options3);

//     imagesToLoad3.forEach((img) => {
//         observer.observe(img);
//     });
// } else {
//     imagesToLoad3.forEach((img) => {
//         loadImages3(img);
//     });
// };