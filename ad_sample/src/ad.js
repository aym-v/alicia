import track from './track'

const ad = {
    frame: {
        x: document.body.clientWidth,
        y: document.body.clientHeight,
    }
};

track('view');

document.body.addEventListener('touchstart', event => track('click', { x: event.touches[0].clientX/ad.frame.x*100, y: event.touches[0].clientY/ad.frame.y*100 }));