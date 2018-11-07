import event from './tracking'

const ad = {
    frame: document.getElementById('container'),
    landingPage: 'https://nike.com'
};

event.track('view');
event.watchSurface(ad.frame);
event.listenToClick(ad.frame, ad.landingPage);