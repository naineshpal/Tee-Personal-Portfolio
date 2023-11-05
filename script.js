/* CURSOR */
const mouseCursor = document.querySelector('.cursor');
const hoverLinks = document.querySelectorAll('.cursor-change');

document.addEventListener('mousemove', cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

hoverLinks.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-grow');
    });
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link-grow');
    });
});

/* ABOUT SECTION */
const aboutGrtng = document.querySelector('.about-grtng');
const aboutHey = document.querySelector('.about-hey');
const aboutTxt = document.querySelector('.about-txt');
const aboutWeb = document.querySelector('.about-web');
const aboutToulouse = document.querySelector('.about-toulouse');

const aboutTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: aboutGrtng,
        start: 'top center',
        toggleActions: 'play none reverse none',
        scrub: 1,
        pinSpacing: 'margin',
    },
});

aboutTimeline.from(aboutHey, { scale: 1, opacity: 1, duration: 2.5 });

const aboutTimeline2 = gsap.timeline({
    scrollTrigger: {
        trigger: aboutTxt,
        start: 'top center',
        toggleActions: 'play none reverse none',
        pin: true,
        pinSpacing: 'margin',
    },
});

aboutTimeline2.from(aboutWeb, { x: -1900, opacity: 0, duration: 1.5 });

const aboutTimeline3 = gsap.timeline({
    scrollTrigger: {
        trigger: aboutTxt,
        start: 'top center',
        toggleActions: 'play none reverse none',
        pin: true,
        pinSpacing: 'margin',
    },
});

aboutTimeline3.from(aboutToulouse, { x: 1400, opacity: 0, duration: 1 }, '-=1');

/* WORK SECTION */

/* WORK 01 */
const work01 = document.querySelector('.work01');
const work01Img = document.querySelector('.work01-img');
const work01Txt = document.querySelector('.work01-txt');

const work01Timeline = gsap.timeline({
    scrollTrigger: {
        trigger: work01,
        start: 'top center',
        toggleActions: 'play none none none',
        pinSpacing: 'margin',
    },
});

work01Timeline.from(work01Img, { scale: 0.85, opacity: 0, duration: 2 });

const work01Timeline2 = gsap.timeline({
    scrollTrigger: {
        trigger: work01,
        start: 'top center',
        toggleActions: 'play none none none',
        pinSpacing: 'margin',
    },
});

work01Timeline2.from(work01Txt, { opacity: 0, y: 100, duration: 1.5 });

/* Repeat similar logic for other work sections (WORK 02, WORK 03, WORK 04) */

document.addEventListener('DOMContentLoaded', function () {
    /* SCROLL UP */
    document.querySelector('.footer-go-up').addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });

    document.querySelector('.foot-up-hidden').addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });

    document.querySelector('.main-p-go-up').addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });

    /* SCROLL DOWN */
    document.querySelector('.contact-me').addEventListener('click', function () {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
        });
    });
});
